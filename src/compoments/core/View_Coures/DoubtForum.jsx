import React from "react";
import SideBar from "../DoubtBot/SideBar";
import Main from "../DoubtBot/Main";
import { GiThink } from "react-icons/gi";

const DoubtForum = () => {
    return (
        <>
            <div className="flex flex-col w-full h-[calc(100vh-4rem)] text-white ">
                <div className='flex items-center text-lg py-2 px-4'>
                    <div className='flex flex-row items-center justify-between gap-3'>
                        <GiThink size={20} />
                        <p className='font-bold text-2xl text-yellow-25'>Doubt Forum</p>
                    </div>
                </div>
                <hr className="h-[2px]"/>
                <div className="flex h-[calc(100vh-4rem)] overflow-hidden bg-richblack-25 gap-[2px] w-full">
                    <SideBar />
                    <Main />
                </div>
            </div>
        </>
    )
}

export default DoubtForum;