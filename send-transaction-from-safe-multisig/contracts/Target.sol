pragma ever-solidity ^0.62.0;
pragma AbiHeader expire;
pragma AbiHeader pubkey;


contract Target {
    uint state;

    constructor() public {
        tvm.accept();
    }

    function setState(uint _state, address _sendGasBackTo) external {
        state = _state;
        _sendGasBackTo.transfer(0, false, 64);
    }

    function getDetails() external view returns (uint _state) {
        return state;
    }
}
