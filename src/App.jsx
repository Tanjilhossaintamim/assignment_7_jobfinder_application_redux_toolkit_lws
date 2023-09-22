import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Navbar />
        <SideBar />
        {/*  will render all child components  */}
        <Outlet />
      </div>
    </>
  );
}

export default App;
