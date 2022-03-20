import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./Loading.css";
export const Loading = () => {
  return (
    <div className="loading-div">{<AiOutlineLoading3Quarters size={50} />}</div>
  );
};
