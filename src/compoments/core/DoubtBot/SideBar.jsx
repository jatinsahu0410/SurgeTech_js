import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { MdOutlineMarkChatRead } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setNewDoubt, setprompt } from '../../../slices/promptSlice';

const SideBar = () => {
    const [extendSide, setExtendSide] = useState(true);
    const { prevPrompt, prompt } = useSelector((state) => state.doubts);
    const dispatch = useDispatch();
    console.log(prevPrompt);
    console.log(prompt);

    const loadPromt = async (prompt) => {
        dispatch(setprompt(prompt));
    }

    const openNewDoubt = () => {
        dispatch(setNewDoubt(true));
    }
    return (
        <div className={`min-h-[100%] bg-richblack-900 inline-flex flex-col justify-between bg-slate-600 p-6 ${extendSide ? "w-[30%]" : "w-auto"}`}>
            <div className=' block '>
                <FaBars size={20} fontSize={18} className=" cursor-pointer ml-[10px]" onClick={() => setExtendSide(prev => !prev)} />
                <div className='flex mt-4 items-center gap-3 p-3 bg-white rounded-3xl text-black ' onClick={openNewDoubt}>
                    <BsChatText className='' />
                    {
                        extendSide ? (<p>New Chat</p>) : (null)
                    }
                </div>
                {
                    extendSide ? (
                        <div className='flex flex-col '>
                            <strong className='font-bold mt-[30px] mb-[20px]'>Recent</strong>
                            {
                                prevPrompt.map((item, index) => {
                                    return (
                                        <div className='flex flex-row items-center gap-3 rounded-full hover:bg-slate-800 px-4 py-2' key={index} onClick={() => loadPromt(item)}>
                                            <MdOutlineMarkChatRead className=' mt-1' size={16} fontSize={16} />
                                            <p className=' text-lg'>{item.slice(0, 15)}...</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ) : (null)
                }
            </div>
        </div>
    )
}

export default SideBar