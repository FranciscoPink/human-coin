import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <img src="https://lh3.googleusercontent.com/M8hr6LyIcVqLH6jLsFR7cM53pD9vgCIMly7B6w0WIuLXL6-Vowx4fJvA3D3C8SouA1YU7YBB2lmMmBfHb2ncNcQJnEg4jFeco1ntpkKe5a69_bBoJrbDJ_klcLmPYO5LaTKFfL3Kv3RvhAK1mO6NUpS3CNoc17AOvY2xJ0dxFttG5WTYsyi6RMA6WbbooRA3jJ2dRtfcMCrbJJOEd7GfqAHUXDNpPbLc18twbflVC8BWDYwwodUP6gSIj9ZSsGHZc57Ut5hJiJB0cEOo6GBujbLelrdfVwx1tUaIFd5Q5A4_L8yH_hsM0AHwG8UhKjQsAHM2hgIHPuXxmIus3uPye7WIR-zDGj5x04Q9vuQ-woVCLAPwMOGMzJzaSbHRQpDqHgyFT6I2IX-raB-BC67YJ6sHObiNo4cNoywBAdswDi5M8ZiyUnvIFUDiUbLsbimvMOkFpzFs1kaU7beLoJgowWAImFrMKB6DHzrv1aVx6muelyOF_GiiDFdpAQiV-dhxXWnonCELVME8FKVHQI9yZ79MPXwzGCpb44B_l4euFOEiLW5VLbnRicauQV54PnJCy7bW1Nh5uBEinNiw425SMWflyiPUEIuL2AxyiqnK6-ob9cdOq2c84zq0fvAQUQmPFlisurasYwh2-L9NRc5PDQNcSvgBzcGVyAY5_PGSrW99wbBLYBZbc7QPAny8SxC19R1eG-3oeTbT6xb91eqdDQ=w1590-h1592-no?authuser=0" className="logo" alt="H-Coin" />
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </nav>
    </div>
  )
}