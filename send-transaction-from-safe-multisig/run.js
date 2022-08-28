const { Account } = require("@eversdk/appkit");
const { TonClient, signerKeys, signerNone } = require("@eversdk/core");
const { libNode } = require("@eversdk/lib-node");

const { SafeMultisigWalletContract } = require("./artifacts/SafeMultisigWalletContract")
const { TargetContract } = require("./artifacts/TargetContract")

TonClient.useBinaryLibrary(libNode);

async function main(client) {
    const keys = await TonClient.default.crypto.generate_random_sign_keys();

    const targetAccout = new Account(TargetContract, {
        signer: signerKeys(keys),
        client,
    });

    const targetAddress = await targetAccout.getAddress();

    await targetAccout.deploy({ useGiver: true });
    console.log(`Target contract was deployed at address: ${targetAddress}`);

    const multisigAccount = new Account(SafeMultisigWalletContract, {
        signer: signerKeys(keys),
        client,
        initData: {}
    })
    const multisigAddress = await targetAccout.getAddress();

    await multisigAccount.deploy({
        useGiver: true, initInput: {
            owners: [`0x${keys.public}`],
            reqConfirms: 1
        }
    });

    // Call `touch` function
    let response = await targetAccout.runLocal("getDetails", {});
    console.log(`Contract state before transaction is ${response.decoded.output._state}`);

    const payload = (await client.abi.encode_message_body({
        abi: targetAccout.abi,
        call_set: {
            function_name: "setState",
            input: {
                _state: '0xF',
                _sendGasBackTo: multisigAddress
            },
        },
        is_internal: true,
        signer: signerNone(),
    })).body

    await multisigAccount.run("sendTransaction", {
        dest: targetAddress,
        value: 5_000_000_000,
        bounce: false,
        flags: 0,
        payload
    })

    response = await targetAccout.runLocal("getDetails", {});
    console.log(`Contract state before transaction is ${response.decoded.output._state}`);
}

(async () => {
    const client = new TonClient({
        network: {
            // Local TON OS SE instance URL here
            endpoints: ["http://localhost"]
        }
    });
    try {
        console.log("Hello localhost TON!");
        await main(client);
        process.exit(0);
    } catch (error) {
        if (error.code === 504) {
            console.error(`Network is inaccessible. You have to start TON OS SE using \`tondev se start\`.\n If you run SE on another port or ip, replace http://localhost endpoint with http://localhost:port or http://ip:port in index.js file.`);
        } else {
            console.error(error);
        }
    }
    client.close();
    process.exit(0);
})();
