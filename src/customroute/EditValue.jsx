import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const EditValue = ({ children }) => {
  const { editing } = useSelector((state) => state.jobs);
  return editing.id ? children : <Navigate to={"/"}></Navigate>;
};

EditValue.propTypes = {
  children: PropTypes.element,
};

export default EditValue;
