import { Link } from "react-router-dom";
import logo from "./logo.jpg"

export default function Nav() {
  return (
    <div>
      <img className="logo" src={logo} alt="H-Coin" />
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}