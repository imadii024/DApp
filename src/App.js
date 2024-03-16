import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import {con} from './contract';
import Details from "./Details";
export default function Home() {
  const [signer,setSigner]=useState("");
  const [connect,setConnect]=useState("Connect to metamask");
  const [smartContract,setsmartContract]=useState("");
  const [name,setName]=useState("");
  const [message,setMessage]=useState("");
  const buyMeCoffee=async()=>{
    try{
        const done=await smartContract.functions.buyCoffee(message,name,{value:ethers.utils.parseEther("0.01")});
        const buyMeCoffee=async()=>{
    try{
        const transaction=await smartContract.functions.buyCoffee(message,name,{value:ethers.utils.parseEther("0.01")});
        await transaction.wait();
        alert("Thank you very much");
        window.location.reload();
    }
    catch(err){
      console.log(err);
      alert('Failed to buy coffee');
      window.location.reload();
    }
  }
    }
    catch(err){
      console.log(err);
      alert('Failed to buy coffee');
      window.location.reload();
    }
  }
  const connectToMetamask=async()=>{
    if(!window.ethereum){
      alert("Please download and use metamask")
    }
    try{
      const provider=new ethers.providers.Web3Provider(window.ethereum,'any');
      await provider.send("eth_requestAccounts",[]);
      const signer=provider.getSigner();
      setSigner(signer);
      setConnect("Connected");
      setsmartContract(new ethers.Contract(con.address,con.abi,signer));
      console.log(await signer.getAddress());
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="h-full w-full flex flex-col items-center pt-5">
      <div className="">  
        <button onClick={connectToMetamask} className="bg-white rounded-3xl p-2 text-blue-600 md:w-[500px] hover:bg-blue-600 hover:text-white">{connect}</button>    
      </div>
      <div className="h-full w-full bg-white mt-10 rounded-3xl py-5">
          <div className="flex flex-col">
            <div className="flex justify-center text-black gap-5 my-5">
                <label>Name</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Name" className="border-2 border-black rounded-xl text-center"/>
            </div>
            <div className="flex justify-center text-black gap-5 my-5">
                <label>Message</label>
                <input type='text' placeholder="Message goes here"
                 onChange={(e)=>setMessage(e.target.value)}
                 className="border-2 border-black rounded-xl text-center"/>
            </div>
            <div className="flex justify-center my-5">
              <button onClick={buyMeCoffee} className="bg-blue-600 rounded-3xl p-2 text-white w-[250px] hover:bg-black hover:text-white">Buy me a coffee 0.01 ETH</button>
            </div>
          </div>
      </div>
      <Details/>
    </div>
    );
}
