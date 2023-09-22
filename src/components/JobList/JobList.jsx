import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import { useEffect } from "react";
import { fetchJobs } from "../../redux/features/Job/jobSlice";

const JobList = () => {
  const { isLoading, isError, jobs, error } = useSelector(
    (state) => state.jobs
  );
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
    content = jobs.map((job) => <Job key={job.id} job={job} />);
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
