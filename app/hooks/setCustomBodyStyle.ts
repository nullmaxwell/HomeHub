export default function setCustomBodyStyle() {

  const classListReqs = ' min-h-screen w-full my-0 mx-auto';
  // Retrieve the previous selection from local storage
  const storedColor = localStorage.getItem('customColor');

  if (storedColor !== null) {
    const currentColor = `${storedColor}`
    // Set initial class for body element
    const initialClass = classListReqs;
    document.body.className = initialClass;
    document.body.style.backgroundColor = currentColor;
  }

}