import axios from 'axios'
import { Link } from "react-router-dom"

export default function Open(props) {

  const openWallet = async () => {
    try {
      const response = await axios.get(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`);
      console.log(response.data);
    } catch (error) {
      console.log("error")
    }
  }


  return (
    <div>
      <h1>Enter existing ID</h1>
      <form onSubmit={openWallet}>
        <input type="text" placeholder="ex. aBc12@" />
        <Link to="/mining"><button type="submit">Open Wallet</button></Link>
      </form>

      <div>
        <p>Don't have a wallet?</p>
        <Link to="/create">Click here</Link>
      </div>
    </div>
  )
}