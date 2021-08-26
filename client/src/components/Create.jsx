import axios from 'axios'
import { Link, useHistory } from "react-router-dom"
// import { useParams } from 'react-router'

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
  let history = useHistory()
  const openWallet = async (props) => {
    let id
    try {
      const response = await axios.get(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`);
      id = response.data.records[response.data.records.length - 1].id
    } catch (error) {
      console.log("error")
    }
    history.push(`/mining/${id}`)
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