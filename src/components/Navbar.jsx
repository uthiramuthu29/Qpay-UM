import { NavLink } from "react-router-dom";

import homeLogo from "../assets/img/bharat-connect-home-logo.svg";
import homeLogoActive from "../assets/img/bharat-connect-home-logo-active.svg";

import customerCare from "../assets/img/customer-service.svg";
import customerCareActive from "../assets/img/customer-service-active.svg";

import history from "../assets/img/history.svg";
import historyActive from "../assets/img/history-active.svg";

import profile from "../assets/img/profile.svg";
import profileActive from "../assets/img/profile-active.svg";
import BharatConnect from "../assets/img/Bharat-connect-logo.png";

export default function Navbar() {
  const menuItems = [
    { name: "Home", path: "/", icon: homeLogo, iconActive: homeLogoActive },
    { name: "QR", path: "/manage-qr", icon: customerCare, iconActive: customerCareActive },
    { name: "History", path: "/settle-now", icon: history, iconActive: historyActive },
    { name: "Profile", path: "/profile", icon: profile, iconActive: profileActive },
  ];

  return (
    <>
      <nav className="h-[75vh] flex flex-col justify-between rounded-[16px] fixed w-[272px] z-999">
        <ul className="px-[16px] pt-[16px]">

            {menuItems.map((item) => (
                <li key={item.name} className="mb-[16px]">
                    <NavLink to={item.path} className={({isActive}) => `flex items-center gap-[8px] py-[16px] ps-[20px] rounded-[16px] ${
                  isActive ? "bg-white" : ""
                }`}>
                    {({isActive}) => (
                        <>
                        <img src={isActive ? item.iconActive : item.icon} alt={item.name}/>
                        <h4 className={`text-[14px] font-medium ${isActive ? "text-[#42794A]" : "text-[#94CA9C]"}`}>
                    {item.name}
                  </h4>
                        </>
                    )}
                </NavLink>

                </li>
            ))}
        </ul>

        <div className="bharat-connect bg-white py-[16px] rounded-b-[16px]">
          <img className="max-w-[88px] mx-auto" src={BharatConnect} alt="" />
        </div>
      </nav>
    </>
  );
}
