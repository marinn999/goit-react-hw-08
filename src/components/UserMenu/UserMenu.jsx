import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const clickHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={s.container}>
      <p className={s.message}>
        Hello {user.name}, {user.email}
      </p>
      <button onClick={clickHandler} className={s.btn}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
