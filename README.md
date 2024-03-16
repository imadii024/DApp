# Coffee DApp

Welcome to the Coffee Support DApp, a decentralized application built on the Ethereum blockchain. This application enables supporters to buy virtual coffees for the project owner as a token of appreciation and support. Each coffee purchase includes a small ETH transaction and allows the buyer to leave a message and their name, creating a warm community vibe around the project.

## Features

- **Buy Coffee:** Supporters can send ETH to buy a coffee for the project owner. Each transaction allows for a personalized message and the supporter's name.
- **View Coffee Purchases:** The DApp provides functionalities to view all the coffee purchases, including the sender's address, message, name, and the timestamp of each purchase.
- **Track Support:** Easily track the total number of coffees bought as a measure of support.

## Smart Contract

The backbone of this DApp is the `CoffeeContract`, deployed on the Ethereum blockchain. It handles coffee purchases, stores messages, sender details, and manages the transfer of ETH to the project owner.

### Key Functions

- `buyCoffee(string memory _message, string memory _name)`: Allows a user to buy coffee. This function is payable, requiring a value to be sent with the transaction.
- `getAllCoffee()`: Returns an array of all coffee purchases, including the sender's address, message, name, and timestamp.
- `getTotalCoffee()`: Returns the total number of coffees bought.

### Events

- `NewCoffee`: Emitted when a new coffee is bought, providing the sender's address, message, name, and timestamp of the purchase.

## How to Use

1. **Setup Metamask:** Ensure you have MetaMask installed and connected to the Ethereum network.
2. **Access the DApp:** Visit the DApp's website and connect your MetaMask wallet.
3. **Buy Coffee:** Choose to buy a coffee, enter your message and name, and confirm the transaction with ETH.
4. **View Contributions:** Navigate to the history section to see all coffee purchases and messages from supporters.
5. **Track Support:** The total number of coffees bought can be viewed on the dashboard, giving an insight into the level of support received.

## Development and Deployment

- **Prerequisites:** Install Node.js, npm, and Truffle.
- **Smart Contract:** Deploy the `CoffeeContract` using Truffle or Remix to the Ethereum network.
- **Frontend:** Develop a frontend application to interact with the smart contract. Use Web3.js or Ethers.js to connect to Ethereum, call contract methods, and handle events.
- **Testing:** Test the smart contract functions using Truffle or Hardhat to ensure reliability and security.

## Contributions

We welcome contributions and suggestions to improve the DApp. Feel free to fork the repository, make changes, and submit a pull request.

## License

The Coffee Support DApp is open-source software licensed under the MIT License.

---
