import { useState } from "react";
import Image from "../image/image";
import ArrowDown from "@/assets/icons/arrowDown";
import { assets } from "@/assets";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Whole", src: assets.whole },
        { title: "Teachers", src: assets.teacher },
        { title: "Classrooms", src: assets.classroom },
        { title: "Subjects", src: assets.textBooks },
        { title: "Room Supervision", src: assets.facilitator },
        { title: "Settings", src: assets.settings },
    ];

    const handleSideBar = () => {
        setOpen(!open)
        console.log(open);
    }

    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-24"} bg-dark-purple h-screen p-5 pt-8 relative duration-300`}>
                <div onClick={handleSideBar}>
                    <ArrowDown
                        className={`w-10 h-10`} />
                </div>
                <ul className="pt-6 flex flex-col gap-2">
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-sky-blue hover:text-white font-primary bg-blue-300 text-sm items-center gap-x-4`}
                        >
                            <Image src={menu.src} className="w-[25px]"/>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;