import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/loginPage`);
  };
  return (
    <div className="bg-slate-200 py-4">
      <div className="container mx-auto">
        <div className="flex flex-row">
          <button
            className="bg-[#0D61A4] rounded-[100px] w-[150px] h-[40px] text-white font-bold"
            onClick={() => handleClick()}
          >
            ثبت نام/ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
