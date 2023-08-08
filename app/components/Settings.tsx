'use client'
import classListArray from '../data/themes'

import { BsGearFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import setBodyStyle from '../hooks/setBodyStyle';

export default function Settings() {
    const [open, setOpen] = useState<boolean>(false);
    const [currentClassIndex, setCurrentClassIndex] = useState<Number>(0);


    useEffect(() => {
        // Retrieve the previous selection from local storage
        const storedIndex = localStorage.getItem('selectedClassIndex');
        if (storedIndex !== null) {
            setCurrentClassIndex(parseInt(storedIndex, 10));
        }
    })

    function handleDropdownChange(e: any) {
        const newIndex = parseInt(e.target.value);
        localStorage.setItem('selectedClassIndex', newIndex.toString())
        setBodyStyle()
        setCurrentClassIndex(newIndex)
    }

    const Modal = () => (
        <>
            {/* <!-- The modal --> */}
            <div id="modal" className="fixed top-4 right-4 w-52 h-auto z-20 bg-slate-700 rounded-lg shadow-md">
                <div className="p-4">
                    <button className="close-button z-40" id="closeButton" onClick={() => setOpen(false)}>&times;</button>
                    <div className="slider-container z-20 relative">
                        <p className="text-sm font-bold py-1 text-white">Noise:</p>
                        <input type="range" id="opacitySlider" min="0" max="100" defaultValue="50" className="w-full" />
                    </div>
                    <div id="dropdownContainer" className="my-4 z-20 relative">
                        <p className="text-sm font-bold py-1 text-white">Theme:</p>
                        <select id="gradientDropdown"
                            className="border rounded bg-white dark:bg-gray-800 text-black dark:text-white px-2 py-1 w-full"
                            onChange={handleDropdownChange}
                            value={currentClassIndex.toString()}>
                            {classListArray.map((theme, index) => (
                                <option key={index} value={index}>{theme.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <>
            <button id="showModalButton" className="z-20 absolute top-5 right-5 text-xl md:text-3xl hover:scale-105 text-neutral-200" onClick={() => open ? setOpen(false) : setOpen(true)}><BsGearFill /></button>

            {open && <Modal />}
        </>
    )
}