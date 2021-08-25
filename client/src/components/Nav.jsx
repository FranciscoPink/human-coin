import { Link, Route } from "react-router-dom";
import About from "./About"
import Contact from "./Contact"


export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Route path="/about" exact><About /></Route>
        <Route path="/contact" exact><Contact /></Route>
      </main>
    </div>
  )
}