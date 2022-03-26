import { ImSpinner6 } from "react-icons/im";
import "./Loading.css";
export const Loading = () => {
  return <div className="loading-div">{<ImSpinner6 size={50} />}</div>;
};
