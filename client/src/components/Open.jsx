import axios from 'axios'
import { Link, useHistory } from "react-router-dom"


export default function Open() {
  // const [id, setId] = useState('')
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
      <h1>Enter wallet ID</h1>
      {/* <input type="text" placeholder="ex. aBc12@" /> */}
      <button type="click" onClick={openWallet}>Open Wallet</button>

      <div>
        <p>Don't have a wallet?</p>
        <Link to="/create">Click here</Link>
      </div>
    </div>
  )
}