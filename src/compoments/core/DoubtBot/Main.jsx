import React, { useEffect, useState } from 'react'
import { RiGalleryUploadLine } from "react-icons/ri";
import { CiMicrophoneOn } from "react-icons/ci";
import { BiSend } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { setNewDoubt, setPrevPrompt, setResultData, setprompt } from '../../../slices/promptSlice';
import botImg from "../../../assets/Images/bot_profile.jpeg";
import { onSent } from '../../../config/generateGeminiResponse';
import "./loader.css";

const Main = () => {
    const { prompt, newDoubt, resultData } = useSelector((state) => state.doubts);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [currPrompt, setCurrPropt] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useSelector((state) => state.profile);

    const handlekeyDown = (e) => {
        if (e.key === "Enter") {
            submitHandler();
        }
    }
    const newChat = () => {
        setLoading(false);
        setShowResult(false);
    }
    useEffect(() => {
        if (newDoubt === true) {
            newChat();
            dispatch(setNewDoubt(false));
        }
    }, [newDoubt]);

    const submitHandler = async () => {
        try {
            if (prompt !== "") {
                console.log("The curr prompt is : ", prompt)
                setLoading(true);
                setShowResult(true);
                setCurrPropt(prompt);
                const res = await onSent(prompt);
                let responseArray = res.split("**");
                // To old the imp stuff
                let newRes = "";
                for (let i = 0; i < responseArray.length; i++) {
                    if (i === 0 || i % 2 !== 1) {
                        newRes += responseArray[i];
                    } else {
                        newRes += "<b>" + responseArray[i] + "</b>";
                    }
                }
                // to create new line
                let newRes2 = newRes.split("*").join("</br>");
                dispatch(setprompt(""));
                dispatch(setResultData(newRes2));
                setLoading(false);
            } else {
                setLoading(true);
                setCurrPropt(input);
                setShowResult(true);
                if (prompt !== "" || input !== "") {
                    dispatch(setPrevPrompt(input));
                }
                setInput("");
                const res = await onSent(input);
                let responseArray = res?.split("**");
                // To old the imp stuff
                let newRes = "";
                for (let i = 0; i < responseArray.length; i++) {
                    if (i === 0 || i % 2 !== 1) {
                        newRes += responseArray[i];
                    } else {
                        newRes += "<b>" + responseArray[i] + "</b>";
                    }
                }
                // to create new line
                let newRes2 = newRes.split("*").join("</br>");
                dispatch(setResultData(newRes2));
                setLoading(false);
                console.log("The reult id : ", res);
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (prompt !== "") {
            submitHandler();
        }
    }, [prompt])
    return (
        <div className='min-h-[100%] bg-black pb-2 relative px-1 w-full bg-gray-950 text-white'>
            {
                !showResult ? (
                    <div className=' max-w-[90%] mx-auto min-h-[15vh] '>
                        <div className=' ml-4 font-bold text-pretty p-4'>
                            <p>
                                <span className='text-4xl'>Hello, Student</span>
                            </p>
                            <p className='text-3xl ml-4'>How can I help u today ? </p>
                        </div>
                    </div>
                ) : (
                    <div className=' px-4 py-8 max-h-[75vh] overflow-y-auto overflow-x-hidden no-scrollbar'>
                        <div className="mx-[40px] flex items-center gap-5 mb-4">
                            <img src={user?.image} alt={`profile-${user?.firstName}`} width={50} height={50} className=' rounded-full shadow-md shadow-white'/>
                            <p className=' font-semibold text-pretty italic text-lg ml-2'>
                                "{currPrompt}"
                            </p>
                        </div>
                        <div className='flex gap-5 mx-[40px] mt-4 w-full'>
                            <div className='flex flex-col max-h-full w-[7%] justify-start items-center'>
                                <img src={botImg} width={50} height={50} className=' rounded-full shadow-md shadow-white' />
                            </div>
                            {
                                loading ? (
                                    <div className='gemini-loader w-[80%]'>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                ) : (
                                    <div className='w-[80%]'>
                                        <p className='text-lg leading-7' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                )
            }
            <div className='absolute -bottom-2 w-[94%] max-w-[1260px] py-5 mx-auto right-6 text-black'>
                <div className='flex items-center justify-between gap-5 rounded-full bg-white'>
                    <input type="text" placeholder='Ask ur Doubt' className=' flex-1 outline-none border-none text-lg rounded-full h-12 ml-4' onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={handlekeyDown} />
                    <div className='flex items-center gap-5 mr-5 text-black'>
                        <RiGalleryUploadLine size={20} fontWeight={500} />
                        <CiMicrophoneOn size={20} fontWeight={500} />
                        <button>
                            <BiSend size={20} onClick={() => submitHandler()} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;