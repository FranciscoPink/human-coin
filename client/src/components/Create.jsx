import axios from 'axios'
import { Link } from "react-router-dom"

export default function Create() {


  const handleSubmit = async (e) => {
    const newWallet = {
      "records": [
        {
          "fields": {
            "balance": 0,
          }
        }
      ]
    }
    await axios.post(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`,
      newWallet).then(openWallet);
  }
  const openWallet = async () => {
    await axios.get(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`).then((response) => {
      console.log(response.data.records[0].fields.balance)
      console.log(response.data.records[0].id)
    })
  }


  return (
    <div>
      <Link to="/mining"><button type="click" onClick={handleSubmit}>Create Wallet</button></Link>
      <div>
        <p>Already have a wallet ID?</p>
        <Link to="/open">Click here</Link>
      </div>
    </div >
  )
}