import "./Banner.css";
import { useSelector } from "react-redux";

const Banner = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="banner">
      <h1>Banner</h1>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default Banner;
