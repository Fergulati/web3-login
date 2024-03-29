import React, { useState } from 'react';
import { ethers } from 'ethers';

const Login = () => {
    const [userAddress, setUserAddress] = useState('');
    const { ethers } = require("ethers");
    const connectWallet = async () => {
        if (window.ethereum) { // Check if MetaMask is installed
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setUserAddress(address);
            } catch (error) {
                console.error("Error connecting to MetaMask", error);
            }
        } else {
            alert('MetaMask is not installed. Please install it to use this app.');
        }
    };


    return (
        <><div>
            <h1>Dee builds a MetaMask Login</h1>
        </div><div>
                {userAddress ? (
                    <p>Connected with <strong>{userAddress}</strong></p>
                ) : (
                    <button onClick={connectWallet}>Connect Wallet</button>
                )}
            </div>
        </>
    );
};

export default Login;
