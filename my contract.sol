pragma solidity 0.8.26;

contract MyToken {
    address private owner;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;

    constructor() {
        owner = msg.sender;
        totalSupply = 10;
    }

    function mint(address _to, uint256 _amount) public {
        require(msg.sender == owner, "Only the owner can mint");
        totalSupply += _amount;
        balances[_to] += _amount;
    }

    function burn(uint256 _amount) public {
        require(msg.sender == owner, "Only the owner can burn");
        totalSupply -= _amount;
        balances[msg.sender] -= _amount;
    }

    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function getBalance(address _address) public view returns (uint256) {
        return balances[_address];
    }
}
