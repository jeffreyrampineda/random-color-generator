import React, { useState , useRef, useEffect } from 'react';
import { ReactComponent as DevicesSvg } from './assets/undraw_Devices.svg';
import './App.css';
import Button from './components/Button';

const HEX_SYMBOLS = "0123456789ABCDEF";

function App() {
  // Generates a random 6 digit hexadecimal.
  const generateRandomColor = () => {
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += HEX_SYMBOLS[Math.floor(Math.random() * 16)];
    }
    return newColor;
  }

  /**
   * Checks if the hexColor is cool or warm.
   * @param {string} hexColor 
   * @returns true if blue > red.
   */
  const isColorCool = (hexColor) => parseInt(hexColor.substr(5, 2), 16) > parseInt(hexColor.substr(1, 2), 16);

  // Returns a string describing the mood.
  const getMoodString = (isCool) => {
    if (isCool) {
      return 'calm, peace, and serenity';
    }
    return 'energy, brightness, and action';
  } 

  /**
   * Checks if the hexColor is light or dark.
   * @param {string} hexColor 
   * @returns true if light.
   */
  const isColorLight = (hexColor) => {
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return brightness > 155;
  }

  /**
   * Returns a hex color in contrast to the backgroundColor.
   * @param {string} backgroundColor 
   * @returns light or dark hex color.
   */
  const getLightOrDark = (backgroundColor) => {
    if (isColorLight(backgroundColor)) {
      // Use dark text color.
      return '#222';
    }
    return '#fff';
  }

  const [currentColor, setCurrentColor] = useState(() => generateRandomColor());
  const devicesSvgRef = useRef();

  useEffect(() => {
    devicesSvgRef.current.getElementById('computer_text1').textContent = currentColor;
    devicesSvgRef.current.getElementById('computer_text1').setAttribute("fill", getLightOrDark(currentColor));

    devicesSvgRef.current.getElementById('ipad_text1').textContent = currentColor;
    devicesSvgRef.current.getElementById('ipad_text1').setAttribute("fill", getLightOrDark(currentColor));

    devicesSvgRef.current.getElementById('phone_text1').textContent = currentColor;
    devicesSvgRef.current.getElementById('phone_text1').setAttribute("fill", getLightOrDark(currentColor));

  }, [currentColor]);

  return (
    <div className="container center">
      <div className="container-svg">
        <DevicesSvg ref={devicesSvgRef} fill={currentColor}></DevicesSvg>
      </div>
      <div className="color-control">
        <p>Mood: {getMoodString(isColorCool(currentColor))}</p>
        <Button
          backgroundColor={currentColor}
          textColor={getLightOrDark(currentColor)}
          action={() => setCurrentColor(generateRandomColor())}
        >
          New Color
        </Button>
      </div>
    </div>
  );
}

export default App;
