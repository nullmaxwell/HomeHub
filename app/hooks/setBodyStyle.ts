import classListArray from "../data/themes";


export default function setBodyStyle () {
    let currentClassIndex;
    const classListReqs = ' min-h-screen w-full my-0 mx-auto';
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