import classListArray from "../data/themes";


export default function setInitStyle() {
    const classListReqs = ' min-h-screen w-full my-0 mx-auto';
    
    if (localStorage.getItem('lastTypeModified') === '1') {
        // Retrieve the previous selection from local storage
        const storedColor = localStorage.getItem('customColor');

        if (storedColor !== null) {
            const currentColor = `${storedColor}`
            // Set initial class for body element
            const initialClass = classListReqs;
            document.body.className = initialClass;
            document.body.style.backgroundColor = currentColor;
        }
    } else if (localStorage.getItem('lastTypeModified') === '0') {

        let currentClassIndex;
        
        // Retrieve the previous selection from local storage
        const storedIndex = localStorage.getItem('selectedClassIndex');

        if (storedIndex !== null) {
            currentClassIndex = parseInt(storedIndex, 10);
        } else {
            currentClassIndex = 0; // Default value if no selection is stored
        }
        // Set initial class for body element
        const initialClass = classListArray[currentClassIndex].class + classListReqs;
        document.body.className = initialClass;
    }
}