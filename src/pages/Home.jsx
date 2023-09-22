import Filter from "../components/Filter/Filter";
import JobList from "../components/JobList/JobList";

const Home = () => {
  return (
    <>
      <div className="lg:pl-[14rem]  mt-[5.8125rem]">
        <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
          <Filter />

          <JobList />
        </main>
      </div>
    </>
  );
};

export default Home;
