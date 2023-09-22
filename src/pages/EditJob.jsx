import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInactive, updateJob } from "../redux/features/Job/jobSlice";
import { useNavigate } from "react-router-dom";

const EditJob = () => {
  const { editing, isLoading, isError } = useSelector((state) => state.jobs);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };

  useEffect(() => {
    const {
      title: etitle,
      type: etype,
      salary: esalary,
      deadline: edeadline,
    } = editing || {};
    if (editing.id) {
      setTitle(etitle);
      setType(etype);
      setSalary(esalary);
      setDeadline(edeadline);
    } else {
      reset();
    }
  }, [editing]);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateJob({
        id: editing.id,
        title,
        type,
        salary: Number(salary),
        deadline,
      })
    );
    if (!isError && !isLoading) {
      dispatch(editInactive());
      navigate("/");
    }
  };

  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6" onSubmit={handelSubmit}>
            <div className="fieldContainer">
              <label className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="">Select Job</option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
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
                <option value="">Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
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
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
                disabled={editing.id == undefined || isLoading}
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;
