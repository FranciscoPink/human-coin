import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'

export default function Mining(props) {
  const { id } = useParams()
  const [count, setCount] = useState(10)
  const [coins, setCoins] = useState(0)

  const addCoins = async () => {
    let coin = {
      "records": [
        {
          "id": id,
          "fields": {
            "balance": parseInt(coins),
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
        <button onClick={() => count === 1 ? setCount(10) : (setCount(count - 1) && setCoins(coins + 1))}>Image Contaner</button>
        <p>Chips to earn next coin: {count}</p>
        <p>Coins mined: {coins} </p>
        <p>Wallet ID: {id}</p>
      </div>
      <form onSubmit={addCoins}>
        <button type="submit">Add coins to wallet</button>
      </form>
    </div>
  )

}