// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoffeeContract {
    struct Coffee {
        address sender;
        string message;
        string name;
        uint256 timestamp;
    }

    Coffee[] private coffees;
    address payable public owner;

    event NewCoffee(address indexed from, uint256 timestamp, string message, string name);

    constructor() {
        owner = payable(msg.sender);
    }

    // Allows someone to buy a coffee for the contract owner.
    // The value sent along with the transaction is considered the coffee price.
    function buyCoffee(string memory _message, string memory _name) public payable {
        require(msg.value > 0, "Can't buy coffee with 0 ETH");

        coffees.push(Coffee(msg.sender, _message, _name, block.timestamp));
        emit NewCoffee(msg.sender, block.timestamp, _message, _name);

        // Transfer the ETH to the owner
        owner.transfer(msg.value);
    }

    // Returns all coffee purchases.
    function getAllCoffee() public view returns (Coffee[] memory) {
        return coffees;
    }

    // Returns the total number of coffees bought.
    function getTotalCoffee() public view returns (uint256) {
        return coffees.length;
    }
}
