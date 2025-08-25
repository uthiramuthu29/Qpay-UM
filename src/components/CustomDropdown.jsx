import { useState } from "react";
import greenDown from "../assets/img/dark-green-down-arrow.svg";
import selectedTick from "../assets/img/tick.svg"
import unselectedRound from "../assets/img/round.svg"

const CustomDropdown = () => {
  const options = ["QR Request Accepted", "Awaiting Production", "Awaiting Dispatch", "Awaiting Delivery"];
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className={`flex justify-between items-center w-full px-[20px] py-[16px] bg-[#EEF8F2] rounded-[8px] cursor-pointer transition-all duration-200 ${open ? "rounded-t-lg rounded-b-none" : "rounded-lg"}`}
      >
        <div className="flex gap-[8px]">
            <img className="w-[24px]" src={selectedTick} alt="" />
            <span className="text-[#42794A] font-semibold text-[20px] leading-[20px]">{selected}</span>
        </div>
        
        <img
          src={greenDown}
          alt="arrow"
          className={`w-[20px] transform transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute w-full bg-[#EEF8F2] border-t-0 rounded-b-[8px] z-10">
          {options.filter((option) => option !== selected) .map((option) => (
            <div
              key={option}
              className="flex items-center gap-[8px] px-[20px] py-[12px] cursor-pointer"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
                {selected === option ? (
                <img src={selectedTick} alt="tick" className="w-[24px]" />
              ) : (
                <img src={unselectedRound} alt="circle" className="w-[24px]" />
              )}
              <span className="text-[#999999] font-semibold text-[20px] leading-[20px]">{option}</span>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
