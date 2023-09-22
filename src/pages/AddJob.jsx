import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postJob } from "../redux/features/Job/jobSlice";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { isLoading, isError } = useSelector((state) => state.jobs);
  const [title, setTitle] = useState("Select Job");
  const [type, setType] = useState("Select Job Type");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadeline] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resetForm = () => {
    setDeadeline("");
    setSalary("");
    setTitle("");
    setType("");
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(postJob({ title, type, salary, deadline }));
    if (!isLoading && !isError) {
      resetForm();
      navigate("/");
    }
  };
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className="fieldContainer">
              <label className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              >
                <option value={""}>Select Job</option>
                <option value={"Software Engineer"}>Software Engineer</option>
                <option value={"Software Developer"}>Software Developer</option>
                <option value={"Full Stack Developer"}>
                  Full Stack Developer
                </option>
                <option value={"MERN Stack Developer"}>
                  MERN Stack Developer
                </option>
                <option value={"DevOps Engineer"}>DevOps Engineer</option>
                <option value={"QA Engineer"}>QA Engineer</option>
                <option value={"Product Manager"}>Product Manager</option>
                <option value={"Social Media Manager"}>
                  Social Media Manager
                </option>
                <option value={"Senior Executive"}>Senior Executive</option>
                <option value={"Junior Executive"}>Junior Executive</option>
                <option value={"Android App Developer"}>
                  Android App Developer
                </option>
                <option value={"IOS App Developer"}>IOS App Developer</option>
                <option value={"Frontend Developer"}>Frontend Developer</option>
                <option value={"Frontend Engineer"}>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Job Type</label>
              <select
                id="lws-JobType"
                name="lwsJobType"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value={""}>Select Job Type</option>
                <option value={"Full Time"}>Full Time</option>
                <option value={"Internship"}>Internship</option>
                <option value={"Remote"}>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lws-JobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  placeholder="20,00,000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label>Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
                value={deadline}
                onChange={(e) => setDeadeline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddJob;
