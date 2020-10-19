pragma solidity ^0.5.10;

contract SetString {
    string storedString;

    constructor(string memory _initstring) public {
        storedString = _initstring;
    }

    function set(string memory _string) public {
        storedString = _string;
    }

    function get() public view returns(string memory) {
        return storedString;
    }
}
