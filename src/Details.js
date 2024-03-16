import React, { useEffect, useState } from 'react';
import { con } from './contract';
import { ethers } from 'ethers';

export default function Details() {
  const [smartContract, setSmartContract] = useState(null);
  const [details, setDetails] = useState([]);

  const connectContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(con.address, con.abi, signer);
      setSmartContract(contract);
    } catch (error) {
      console.error("Error connecting to contract:", error);
    }
  }

  useEffect(() => {
    connectContract();
  }, []);

  useEffect(() => {
    if (smartContract) {
      getDetails();
    }
  }, [smartContract]);

  const getDetails = async () => {
    try {
      const d = await smartContract.getAllCoffee();
      setDetails(d.map(coffee => ({
        sender: coffee.sender,
        message: coffee.message,
        name: coffee.name,
        timestamp: new Date(coffee.timestamp * 1000).toLocaleString() // Convert timestamp to readable format
      })));
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  }

  return (
    <div className='h-full w-full rounded-3xl bg-green-200 flex flex-col items-center my-5 py-2'>
      <h1 className='text-xl font-bold text-black md:text-3xl'>Thanks for Coffee</h1>
        {details.map((coffee, index) => (
            <div className='border-2 border-black rounded-xl p-2 text-[10px] md:text-xl text-black'>  
              <p>Sender: {coffee.sender}</p>
              <p>Name: {coffee.name}</p>
              <p>Message: {coffee.message}</p>
              <p>Timestamp: {coffee.timestamp}</p>
            </div>
          ))}
    </div>
  )
}
