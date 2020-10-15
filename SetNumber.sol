pragma solidity >= 0.4.0 < 0.7.0;

contract SetNumber{
    uint storednumber;
    function set(uint x) public {
        storednumber = x;
    }
    function get() public view returns(uint) {
        return storednumber;
    }
}
