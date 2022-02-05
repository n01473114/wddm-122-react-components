import logo from "../img/logo.svg";

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="Logo" />
      <nav>
        <a href="#intro">About me</a>
        <a href="#software">Software</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
