import axios from 'axios'
// import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom"
import Open from './Open'

export default function Create() {
  // const [id, setId] = useState('');

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
    await axios.post("https://api.airtable.com/v0/appwSNnRvlbsz27yj/Table%20/", newWallet);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Create Wallet</button>
      </form>

      <p>Already have a wallet ID?</p>
      <div>
        <Link to="/open">Click here</Link>
        <Router path="/open"><Open /></Router>
      </div>
    </div>
  )
}
