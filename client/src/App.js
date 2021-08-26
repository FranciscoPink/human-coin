import './App.css';
import { Route } from "react-router-dom"
import Nav from './components/Nav'
import About from "./components/About"
import Contact from "./components/Contact"
import Create from "./components/Create"
import Open from "./components/Open"
import Mining from "./components/Mine"




export default function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <Route path="/" exact>
        <div>
          <h1>Welcome to HumanCoin!</h1>
          <p>
            Who needs overpowered computers and complex algorithms?
            Human powered cryptos are here!
          </p>
        </div>
        <div>
          <Create />
        </div>
      </Route>
      <Route path="/about" ><About /></Route>
      <Route path="/contact" ><Contact /></Route>
      <Route path="/open"><Open /></Route>
      <Route path="/create"><Create /></Route>
      <Route path="/mining/:id"><Mining /></Route>
    </div >
  )

}