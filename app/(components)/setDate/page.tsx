"use client"

import React, { useState } from 'react';

import style from './setdate.module.css';

import { MdContentCopy } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function SetDate() {


    const [inputDateTime, setInputDateTime] = useState("");

    const handleInput = (e: any) => {
        console.log(e.target.value);
        setInputDateTime(e.target.value);
    }


    const changeDate = () => {
        if (inputDateTime === "") {
            toast.error("Please enter a date");
            return;
        }
        let date = new Date(inputDateTime);
        let dateStr = date.toDateString();
        
        //Will be used in the future

    }

    return (
        <>
            <ToastContainer theme='dark' />
            <div className={style.setDateMain}>
                <input className={style.inputDateTime} type="datetime-local" value={inputDateTime} onInput={handleInput} />

                <div className={style.dateRes} onClick={changeDate}>
                    <p>{"Change Date" || "Please enter a date"}</p>

                </div>
            </div>
        </>
    )
}
