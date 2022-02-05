import logo from "../img/logo.svg";

function Software() {
  return (
    <section id="software">
      <figure>
        <img
          className="logo"
          src={logo}
          title="Adobe Creative Cloud"
          alt="Adobe Logo"
        />
      </figure>
      <figure>
        <img
          className="logo"
          src={logo}
          title="MS Office"
          alt="MS Office Logo"
        />
      </figure>
      <figure>
        <img
          className="logo"
          src={logo}
          title="Google Workspace"
          alt="Google Logo"
        />
      </figure>
    </section>
  );
}

export default Software;
