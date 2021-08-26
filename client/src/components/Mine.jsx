import axios from 'axios'

export default function Mining() {
  // let chipper = 0
  // function chip() {
  //   chips += 1
  //   return chips
  // }
  // console.log(chips)
  let chip = () => {
    let chips = 0
    return chips += 100
  }

  const addCoins = async () => {
    let toAdd = 5 + 1
    let coin = {
      "records": [
        {
          "id": "recaeUa2Cm9NmUdF6",
          "fields": {
            "balance": toAdd,
            "chips": 10
          }
        }
      ]
    }
    await axios.put(`https://api.airtable.com/v0/appwSNnRvlbsz27yj/wallets?api_key=${process.env.REACT_APP_WALLET_API_KEY}`, coin)
  }

  return (
    <div>
      <button type="button" onClick={chip}>Chip</button>
      <form onSubmit={addCoins}>
        <button type="submit">Add coins to wallet</button>
      </form>
    </div>
  )

}