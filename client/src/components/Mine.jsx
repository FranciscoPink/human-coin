import axios from 'axios'
import { useState } from 'react'

export default function Mining() {
  let variable = 3
  const [count, setCount] = useState(variable)
  let coinsMined = 3

  const addCoins = async () => {
    let coin = {
      "records": [
        {
          "id": "reckdyETBlMEx9tLT",
          "fields": {
            "balance": parseInt(coinsMined),
            "chips": parseInt(count)
          }
        }
      ]
    }
    await axios.put(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`, coin)
  }

  return (
    <div>
      {/* Code from react tutorial, modified for app use */}
      <div>
        <button onClick={() => setCount(count - 1)}>Image Contaner</button>
        <p>Chips to earn next coin: {count}</p>
        <p>Coins mined: {coinsMined} </p>
        <p>Wallet ID: </p>
      </div>
      <form onSubmit={addCoins}>
        <button type="submit">Add coins to wallet</button>
      </form>
    </div>
  )

}