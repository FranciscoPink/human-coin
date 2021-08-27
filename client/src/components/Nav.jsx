import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}