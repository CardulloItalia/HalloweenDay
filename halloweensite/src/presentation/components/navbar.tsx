import { siteContent } from "@/data/site-content";
import Countdown from "./count";

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={siteContent.labels.home}>
        <img src="/logo.svg" alt="" />
      </a>
      <nav className="main-nav" aria-label={siteContent.labels.primaryNavigation}>
        {siteContent.navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
      </nav>
      <Countdown />
    </header>
  );
}
