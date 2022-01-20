import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <img src="https://lh3.googleusercontent.com/pw/AM-JKLXGzT6DkHMneuQCCn1zzda8ZYv-VbPwefP7gbnc44V2Z8vr6_KXM-nlGGwxD0Z6TEICyJeR0P4zO4XxYgScCOFa93SGnsfd6QiVUJv-I3MbzUOoLWUIffEMFD92y9ZsuTKryeEaS8PlZLT8dqvB7B1C=w1597-h1600-no" className="logo" alt="H-Coin" />
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}