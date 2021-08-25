import axios from 'axios'
import { useEffect } from 'react';

export default function Open(props) {
  // const [wallet, setWallet] = useState('')

  useEffect(() => {
    const openWallet = async () => {
      try {
        const response = await axios.get("https://api.airtable.com/v0/appwSNnRvlbsz27yj/Table%201?api_key=key6l5zUSFw7ZUq3h");
        console.log(response.data);
      } catch (error) {
        console.log("error")
      }
    }
    openWallet();
  }, []);

  return (
    <div>
      <h1>Enter existing ID</h1>
      <form onSubmit="openWallet">
        <input type="text" placeholder="ex. aBc12@" />
        <button type="submit">Open Wallet</button>
      </form>
    </div>
  )
}