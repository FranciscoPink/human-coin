import axios from 'axios'
import { Link } from "react-router-dom"


export default function Create() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWallet = {
      "records": [
        {
          "fields": {
            "balance": 0,
            "chips": 10
          }
        }
      ]
    }

    // REACT_APP_WALLET_API_KEY = key6l5zUSFw7ZUq3h
    await axios.post(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`, newWallet);
  };
  // ${process.env.REACT_APP_WALLET_API_KEY}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Create Wallet</button>
      </form>

      <div>
        <p>Already have a wallet ID?</p>
        <Link to="/open">Click here</Link>
      </div>
    </div >
  )
}
