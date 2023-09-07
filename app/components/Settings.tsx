'use client'
import classListArray from '../data/themes'

import { BsGearFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import setBodyStyle from '../hooks/setBodyStyle';
import { AnimatePresence, motion } from 'framer-motion';
import ColorPicker from './ColorPicker';

export default function Settings() {
    const [open, setOpen] = useState<boolean>();
    const [currentClassIndex, setCurrentClassIndex] = useState<number>(0);
    const [noiseValue, setNoiseValue] = useState<number>(0);
    const [clockState, setClockState] = useState('default');

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

    // const handleRadioChange = (e: any) => {
    //     const newValue = e.target.value;
    //     localStorage.setItem('clockFormat', newValue)
    //     setClockState(newValue);
    // };


    function handleDropdownChange(e: any) {
        const newIndex = parseInt(e.target.value);
        localStorage.setItem('selectedClassIndex', newIndex.toString())
        localStorage.setItem('lastTypeModified', '0')
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
        <motion.div id="modal" className="fixed top-7 right-4 w-fit h-auto z-20 bg-slate-800 border border-slate-600 rounded-lg shadow-md"
            key="modal"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.1 }}>
            <div className="p-4">
                <button className="close-button z-40" id="closeButton" onClick={() => open && setOpen(false)}>&times;</button>
                {/* Noise Options */}
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
                {/* Theme Options */}
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
                <div className='my-4 z-20 relative'>
                    <p className="text-sm font-bold py-1 text-white">Custom Color:</p>
                    <ColorPicker />
                </div>

                {/* Clock options
                <div className="my-4 z-20 relative">
                    <p className="text-sm font-bold py-1 text-white">Clock Format:</p>
                    <div className="flex items-center mb-1">
                        <input
                            id="default-radio-1"
                            type="radio"
                            value="default"
                            name="default-radio"
                            checked={clockState === 'default'}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-radio-1"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Default radio
                        </label>
                    </div>
                    <div className="flex items-center">
                        <input
                            id="default-radio-2"
                            type="radio"
                            value="checked"
                            name="default-radio"
                            checked={clockState === 'checked'}
                            onChange={handleRadioChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                            htmlFor="default-radio-2"
                            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Checked state
                        </label>
                    </div>
                </div> */}
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