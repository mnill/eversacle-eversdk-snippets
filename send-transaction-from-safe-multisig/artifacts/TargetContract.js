const TargetContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setState",
                "inputs": [
                    {
                        "name": "_state",
                        "type": "uint256"
                    },
                    {
                        "name": "_sendGasBackTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getDetails",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_state",
                        "type": "uint256"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "state",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECEwEAAeQAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSArbtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8CgYDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwPDwYDPCCCECBivBq64wIgghBotV8/uuMCIIIQd0tBL7rjAgsJBwM6MPhG8uBM+EJu4wAhk9TR0N7T//pA0ds8MNs88gAOCAwAIgH4asjPhQjOgG/PQMmAQPsAAiIw+EJu4wD4RvJz0fgA2zzyAAoMAUTtRNDXScIBjhdw7UTQ9AVw+GqAQPQO8r3XC//4YnD4Y+MNDgNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCgYrwazwuBy//JcPsAkTDi4wDyAA4NDAAk+Er4Q/hCyMv/yz/Pg8v/ye1UAAT4SgAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShEhEAFHNvbCAwLjYyLjAAAA==",
    code: "te6ccgECEAEAAbcABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPArbtRNDXScMB+GYh2zzTAAGOGYMI1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPI8BwMDSu1E0NdJwwH4ZiLQ1wsDqTgA3CHHAOMCIdcNH/K8IeMDAds88jwMDAMDPCCCECBivBq64wIgghBotV8/uuMCIIIQd0tBL7rjAggGBAM6MPhG8uBM+EJu4wAhk9TR0N7T//pA0ds8MNs88gALBQkAIgH4asjPhQjOgG/PQMmAQPsAAiIw+EJu4wD4RvJz0fgA2zzyAAcJAUTtRNDXScIBjhdw7UTQ9AVw+GqAQPQO8r3XC//4YnD4Y+MNCwNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCgYrwazwuBy//JcPsAkTDi4wDyAAsKCQAk+Er4Q/hCyMv/yz/Pg8v/ye1UAAT4SgAm7UTQ0//TP9MAMdP/0fhq+GP4YgAK+Eby4EwCCvSkIPShDw4AFHNvbCAwLjYyLjAAAA==",
    codeHash: "4b4cde39e51be8e49d79193bbdfdd6ef852f8d4986db5bae1cc5ff557d3c2fe9",
};
module.exports = { TargetContract };