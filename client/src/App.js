import './App.css';
import Nav from './components/Nav'
import Create from "./components/Create"



export default function App() {
  return (
    <div>

      <div>
        <Nav />
      </div>

      <div>
        <h1>Welcome to HumanCoin</h1>
        <p>
          Who needs overpowered computers and complex algorithms?
          Human powered cryptos are here!
        </p>
      </div>

      <div>
        <Create />
      </div>

    </div>
  )

}