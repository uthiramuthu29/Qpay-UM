import { useState } from "react";

import CustomDropdown from "./CustomDropdown.jsx";

import QRcode from "../assets/img/QR-code.png";
import blackArrow from "../assets/img/black-arrow.svg";



export default function TabQR() {
  const [activeTab, setActiveTab] = useState("active");


  const qrCodes = [
    {
      id: "Q201946579",
      sales: "All Marketing Sales-MS1903041155331648980231",
      terminal: "Terminal 1",
    },
    {
      id: "Q201946579",
      sales: "All Marketing Sales-MS1903041155331648980231",
      terminal: "Terminal 2",
    },
    {
      id: "Q201946579",
      sales: "All Marketing Sales-MS1903041155331648980231",
      terminal: "Terminal 3",
    },
    {
      id: "Q201946579",
      sales: "All Marketing Sales-MS1903041155331648980231",
      terminal: "Terminal 4",
    },
  ];

  const qrRequests = [
    {
      sales: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      date: "26.04.2024",
      status: "QR Request Accepted",
    },
    {
      sales: "All Marketing Sales",
      address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
      date: "26.04.2024",
      status: "QR Request Accepted",
    },
  ];

  

  return (
    <div className="border-[1px] border-[#EEEEEE] p-[32px] rounded-[16px]">

      <div className="flex border-[1px] border-[#42794A] p-[4px] rounded-lg overflow-hidden mb-4">
        <button
          onClick={() => setActiveTab("active")}
          className={`flex-1 py-[12px] font-medium text-[16px] leading-[18px] rounded-[4px] ${
            activeTab === "active"
              ? "bg-[#42794A] text-white"
              : "bg-white text-[#42794A]"
          }`}
        >
          Active QR Codes
        </button>
        <button
          onClick={() => setActiveTab("requests")}
          className={`flex-1 py-[12px] font-medium text-[16px] leading-[18px] rounded-[4px] ${
            activeTab === "requests"
              ? "bg-[#42794A] text-white"
              : "bg-white text-[#42794A]"
          }`}
        >
          QR Code Requests
        </button>
      </div>

      {activeTab === "active" && (
        <div className="active-qr">
          {qrCodes.map((code, index) => (
            <div
              key={index}
              className="flex items-center border-b-[1px] border-[#EEEEEE] pt-[24px] pb-[16px]"
            >
              <img
                src={QRcode}
                alt="QR Code"
                className="w-[74px] bg-white border-[#EEEEEE] rounded-[10px] border-[1px] p-[10px]"
              />
              <div className="ml-[8px] flex-1">
                <p className="font-semibold text-[#252525] text-[20px] leading-[20px] mb-[8px]">
                  {code.id}
                </p>
                <p className="font-medium text-[#252525] text-[16px] leading-[16px] mb-[8px]">
                  {code.sales}
                </p>
                <p className="font-medium text-[#999999] text-[16px] leading-[16px]">
                  {code.terminal}
                </p>
              </div>
              <img src={blackArrow} alt="black-arrow" />
            </div>
          ))}
        </div>
      )}

      {activeTab === "requests" && (
        <div className="qr-req">
          {qrRequests.map((req, i) => (
            <div key={i} className="each-req border-b-[1px] border-[#EEEEEE] py-[24px] mb-0">
              <div className="flex items-center mb-[16px]">
                <img
                  src={QRcode}
                  alt="QR Code"
                  className="w-[74px] bg-white border-[#EEEEEE] rounded-[10px] border-[1px] p-[10px]"
                />
                <div className="ml-[8px]">
                  <p className="font-semibold text-[#252525] text-[20px] leading-[20px] mb-[8px]">
                    {req.sales}
                  </p>
                  <p className="font-medium text-[#252525] text-[16px] leading-[16px] mb-[8px]">
                    {req.address}
                  </p>
                  <p className="font-medium text-[#999999] text-[16px] leading-[18px]">
                    Requested on {req.date}
                  </p>
                </div>
              </div>

              <CustomDropdown />
              
            </div>
          ))}
        </div>
      )}

      <button className="w-full mt-[24px] bg-[#42794A] text-white py-[16px] rounded-[12px]">
        Request more QR Codes
      </button>
    </div>
  );
}
