"use client"

import React, { useState } from 'react';

import style from './getdate.module.css';

import { MdContentCopy } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function GetDate() {


    const [inputDateTime, setInputDateTime] = useState("");

    const handleInput = (e: any) => {
        console.log(e.target.value);
        setInputDateTime(e.target.value);
    }


    const handleCopy = () => {
        if (inputDateTime === "") {
            toast.error("Please enter a date");
            return;
        }
        navigator.clipboard.writeText(inputDateTime);
        toast.success("Copied to clipboard");

    }

    return (
        <>
            <ToastContainer  theme='dark' />
            <div className={style.getDateMain}>
                <input className={style.inputDateTime} type="datetime-local" value={inputDateTime} onInput={handleInput} />

                <div className={style.dateRes} onClick={handleCopy}>
                    <i>›</i> <p>{inputDateTime || "Please enter a date"}</p> <i><MdContentCopy /></i>

                </div>
            </div>
        </>
    )
}
