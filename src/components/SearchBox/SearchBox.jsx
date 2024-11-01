import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={handleSearch}
        value={filter}
        name="name"
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
