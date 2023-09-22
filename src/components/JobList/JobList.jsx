import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { useEffect } from "react";
import { fetchJobs } from "../../redux/features/Job/jobSlice";

const JobList = () => {
  const { isLoading, isError, jobs, error, type, priceSorttype, searchValue } =
    useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  let content;
  if (isLoading) content = <p>loading....</p>;
  if (!isLoading && isError) content = <p className="error">{error}</p>;
  if (!isError && !isLoading && jobs.length == 0)
    content = <p>No jobs Available !</p>;
  if (!isError && !isLoading && jobs.length > 0) {
    content = jobs
      .filter((job) => {
        if (type) {
          if (job.type == type) {
            return true;
          }
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (priceSorttype == "asc") return a.salary - b.salary;
        if (priceSorttype == "desc") return b.salary - a.salary;
        return 0;
      });
    if (searchValue) {
      content = content.filter((job) => {
        return job.title.toLowerCase().startsWith(searchValue.toLowerCase());
      });
    }
    content =
      content.length > 0 ? (
        content.map((job) => <Job key={job.id} job={job} />)
      ) : (
        <p>Not Found !</p>
      );
  }
  return (
    <div className="jobs-list">
      {/* <!-- Single Job 1--> */}
      {content}
      {/* <!-- Single Job 1--> */}
    </div>
  );
};

export default JobList;
