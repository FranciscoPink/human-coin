import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export default function Mining(props) {
  const { id } = useParams()
  const { wallets } = props
  const [count, setCount] = useState(10)
  const [coins, setCoins] = useState(0)
  useEffect(() => {
    if (id && wallets.length) {
      const findMatch = wallets.find((wallet) => wallet.id === id)
      if (findMatch) {
        console.log(findMatch)
        setCoins(findMatch.fields.balance)
      }
    }
  }, [id, wallets])
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
  const incrementCoins = () => {
    setCoins(coins + 1)
    setCount(10)
  }
  return (
    <div>
      <div>
        <button onClick={() => count === 1 ? incrementCoins() : setCount(count - 1)}>Chip Away!</button>
        <p>Chips to earn next coin: {count}</p>
        <p>Coins mined: {coins} </p>
        <p>Wallet ID: {id}</p>
      </div>
      <form onSubmit={addCoins}>
        <button type="submit">Add coins to wallet</button>
      </form>
    </div >
  )

}