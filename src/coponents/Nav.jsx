import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/users/ronaldo">Ronaldo</Link>
    </nav>
  );
}
export default Nav;