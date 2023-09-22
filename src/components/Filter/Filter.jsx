import { useDispatch, useSelector } from "react-redux";
import {
  setPriceSortType,
  setSearchValue,
} from "../../redux/features/Job/jobSlice";
import { useState } from "react";

const Filter = () => {
  const { type } = useSelector((state) => state.jobs);
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const handelPriceSorttype = (type) => {
    dispatch(setPriceSortType(type));
  };
  const handelSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchValue(searchInput));
  };
  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">
        {type ? type : "All Available"} Jobs
      </h1>
      <div className="flex gap-4">
        <form onSubmit={handelSearch} className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              dispatch(setSearchValue(e.target.value));
            }}
          />
        </form>
        <select
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
        >
          <option onClick={() => handelPriceSorttype("")}>Default</option>
          <option onClick={() => handelPriceSorttype("asc")}>
            Salary (Low to High)
          </option>
          <option onClick={() => handelPriceSorttype("desc")}>
            Salary (High to Low)
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
