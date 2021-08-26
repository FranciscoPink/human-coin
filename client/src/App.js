import './App.css';
import Nav from './components/Nav'
import Create from "./components/Create"
import { Route } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Open from "./components/Open"




export default function App() {
  return (
    <div>

      <div>
        <Nav />
      </div>
      <div>
        <Route path="/" exact>
          <h1>Welcome to HumanCoin!</h1>
          <p>
            Who needs overpowered computers and complex algorithms?
            Human powered cryptos are here!
            <Create />
          </p>
        </Route>
      </div>
      <Route path="/about" ><About /></Route>
      <Route path="/contact" ><Contact /></Route>
      <Route path="/open"><Open /></Route>
      <Route path="/create"><Create /></Route>
    </div >
  )

}