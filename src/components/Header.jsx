import React, { useState } from "react";
import logo from "./../assets/Images/logo-d-plus.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlusCircle,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
    const [toggle, setToggle] = useState(false)
  const menu = [
    { name: "HOME",
     icons: HiHome
    },
    { name: "SEARCH",
     icons: HiMagnifyingGlass
    },
    { name: "WATCH LIST",
     icons:  HiPlusCircle
    },
    { name: "ORIGINALS",
     icons: HiStar
    },
    { name: "MOVIES",
     icons: HiPlayCircle
    },
    { name: "SERIES",
     icons: HiTv
    }
    
    ];
  return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
      <img src={logo} className="w-[80px] md:w-[115px] p-4 object-cover" />
      <div className="hidden md:flex gap-7">
      {menu.map((item, index) => (
        <HeaderItem name={item.name} Icon={item.icons} />
      ))}
      </div>
      <div className=" flex md:hidden gap-7">
      {menu.map((item, index) => index<3 && (
        <HeaderItem name={''} Icon={item.icons} />
      ))}
      </div>
      <div className="md:hidden" onClick={() => {
        setToggle(!toggle)
      }}>
      
        <HeaderItem name={""} Icon={HiDotsVertical}  />
        {toggle? <div className="absolute m-3  bg-black  border-[1px] p-3 border-gray-700 py-4">
        {menu.map((item, index) => index>2 && (
        <HeaderItem name={item.name} Icon={item.icons} />
      ))} 
        </div> : null}
      
      </div>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_bEt9v_aTVTPm9p9FtSuXZF2NUj7aCEHpDV8LxoaeYLNVXHk7s4K4QhPNQ&s"
      className="w-[40px] rounded-full"/>
    </div>
  );
}

export default Header;
