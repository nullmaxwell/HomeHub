'use client'
import classListArray from '../data/themes'

import { BsGearFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import setBodyStyle from '../hooks/setBodyStyle';
import { AnimatePresence, motion } from 'framer-motion';

export default function Settings() {
    const [open, setOpen] = useState<boolean>();
    const [currentClassIndex, setCurrentClassIndex] = useState<number>(0);
    const [noiseValue, setNoiseValue] = useState<number>(0);

    useEffect(() => {
        // Retrieve the previous selection from local storage
        const storedIndex = localStorage.getItem('selectedClassIndex');
        if (storedIndex !== null) {
            setCurrentClassIndex(parseInt(storedIndex, 10));
        }

        const storedNoise = localStorage.getItem('noise');
        if (storedNoise !== null) {
            setNoiseValue(parseInt(storedNoise, 10))

            const parsed = parseInt(storedNoise, 10) / 100;

            const noiseDiv = document.getElementById('grain-slider');
            if (noiseDiv) {
                noiseDiv.style.setProperty('--grain-opacity', parsed.toString());
            } else {
                console.warn('Element with ID "grain-slider" not found.');
            }
        }
    });


    function handleDropdownChange(e: any) {
        const newIndex = parseInt(e.target.value);
        localStorage.setItem('selectedClassIndex', newIndex.toString())
        setBodyStyle()
        setCurrentClassIndex(newIndex)
    }

    function handleNoise(e: any) {
        const newNoiseValue = parseInt(e.target.value);

        if (isNaN(newNoiseValue)) {
            console.error('Invalid noise value:', e.target.value);
            return;
        }

        localStorage.setItem('noise', newNoiseValue.toString());

        const parsed = newNoiseValue / 100;
        const noiseDiv = document.getElementById('grain-slider');

        if (noiseDiv) {
            noiseDiv.style.setProperty('--grain-opacity', parsed.toString());
        } else {
            console.warn('Element with ID "grain-slider" not found.');
        }
    }

    const Modal = () => (
        <motion.div id="modal" className="fixed top-7 right-4 w-52 h-auto z-20 bg-slate-800 border border-slate-600 rounded-lg shadow-md"
            key="modal"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.1 }}>
            <div className="p-4">
                <button className="close-button z-40" id="closeButton" onClick={() => open && setOpen(false)}>&times;</button>
                <div className="slider-container z-20 relative">
                    <p className="text-sm font-bold py-1 text-white">Noise:</p>
                    <input
                        type="range"
                        id="opacitySlider"
                        min="0"
                        max="100"
                        defaultValue={noiseValue}
                        className="w-full"
                        onChange={handleNoise}
                    />
                </div>
                <div id="dropdownContainer" className="my-4 z-20 relative">
                    <p className="text-sm font-bold py-1 text-white">Theme:</p>
                    <select id="gradientDropdown"
                        className="border rounded bg-white dark:bg-gray-800 text-black dark:text-white px-2 py-1 w-full"
                        onChange={handleDropdownChange}
                        value={currentClassIndex}>
                        {classListArray.map((theme, index) => (
                            <option key={index} value={index}>{theme.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        </motion.div>
    )
    return (
        <>
            <button id="showModalButton" className="z-20 absolute top-5 right-5 text-xl md:text-3xl hover:scale-105 text-neutral-200" onClick={() => open ? setOpen(false) : setOpen(true)}><BsGearFill /></button>
            <AnimatePresence>
                {open &&
                    <Modal />
                }
            </AnimatePresence>
        </>
    )
}