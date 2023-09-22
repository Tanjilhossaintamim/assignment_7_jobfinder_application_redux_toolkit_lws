import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setType } from "../../redux/features/Job/jobSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const handelType = (type) => {
    dispatch(setType(type));
  };
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              onClick={() => handelType("")}
              to="/"
              className="main-menu"
              id="lws-alljobs-menu"
            >
              <i className="fa-solid fa-briefcase"></i>
              <span> All Available Jobs</span>
            </NavLink>
            <ul className="space-y-6 lg:space-y-2 ">
              <li
                onClick={() => {
                  handelType("Internship");
                }}
              >
                <NavLink
                  to={"/internship"}
                  className="sub-menu"
                  id="lws-internship-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>{" "}
                  Internship
                </NavLink>
              </li>
              <li
                onClick={() => {
                  handelType("Full Time");
                }}
              >
                <NavLink
                  to={"/fulltime"}
                  className="sub-menu"
                  id="lws-fulltime-menu"
                >
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i> Full Time
                </NavLink>
              </li>
              <li onClick={() => handelType("Remote")}>
                <NavLink
                  to={"/remote"}
                  className="sub-menu"
                  id="lws-remote-menu"
                >
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i> Remote
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/add-job" className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus"></i>{" "}
              <span>Add NewJob</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
