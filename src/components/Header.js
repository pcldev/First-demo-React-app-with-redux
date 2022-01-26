import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authAction } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const { logout } = authAction;
  const { isAuthenticated } = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const onLogoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
