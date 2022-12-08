import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {

    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="w-72 font-medium h-80">
            <div

                className={`bg-white w-full p-2 flex items-center justify-between rounded ${!selected && "text-gray-700"
                    }`}
            >
                <div onClick={() => setOpen(!open)} className=' bg-black w-12  h-12  flex justify-center items-center rounded-full mx-auto mb-1 cursor-pointer '>
                    <span className='text-2xl uppercase  text-white '>d</span >
                </div>

            </div>
            <ul onClick={() => {
                setOpen(false)
            }}
                className={`bg-white mt-2 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-white">


                </div>
                <li>Option</li>
                <li>Option</li>
            </ul>
        </div>
    );
};

export default Selector;