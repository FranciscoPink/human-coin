import './App.css';
import { Route } from "react-router-dom"
import Nav from './components/Nav'
import About from "./components/About"
import Contact from "./components/Contact"
import Create from "./components/Create"
import Open from "./components/Open"
import Mining from "./components/Mine"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [wallets, setWallets] = useState([])
  useEffect(() => {
    const fetchWallets = async () => {
      const response = await axios.get(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`)
      console.log(response.data.records)
      setWallets(response.data.records)
    }
    fetchWallets()
  }, [])
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="intro">
        <Route path="/" exact>
          <div>
            <h2>Welcome to HumanCoin!</h2>
            <p className="para">
              Who needs overpowered computers and complex algorithms?
              Human powered cryptos are here!
            </p>
          </div>
          <div className="walletComps">
            <p>Create New Wallet</p>
            <Create />
          </div>
        </Route>
      </div>
      <div className="open">
        <Route path="/about" ><About /></Route>

        <Route path="/contact" ><Contact /></Route>
        <Route path="/open"><Open /></Route>
        <Route path="/create"><Create /></Route>
        <Route path="/mining/:id"><Mining wallets={wallets} /></Route>
      </div>
    </div >
  )

}