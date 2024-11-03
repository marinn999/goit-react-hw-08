import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const buildNavLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div className={s.navContainer}>
      <nav className={s.nav}>
        <NavLink className={buildNavLinkClass} to="/login">
          Log in
        </NavLink>
        <NavLink className={buildNavLinkClass} to="/register">
          Sign up
        </NavLink>
      </nav>
    </div>
  );
};
export default AuthNav;
