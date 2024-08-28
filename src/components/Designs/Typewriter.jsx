"use client";
import React, { useEffect, useState } from "react";

const Typewriter = ({ text, actions = [] }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const executeAction = async () => {
      if (index < actions.length) {
        const action = actions[index];
        await performAction(action);
        setIndex((prevIndex) => prevIndex + 1);
      }
    };

    executeAction();
  }, [index, actions]);

  const performAction = async (action) => {
    if (action.type === "type") {
      await typeText(action.count);
    } else if (action.type === "delete") {
      await deleteText(action.count);
    } else if (action.type === "pause") {
      await pause(action.duration);
    }
  };

  // typing text function
  const typeText = (count) => {
    return new Promise((resolve) => {
      // Find the starting index of the text
      let charIndex = displayText.length;

      // Start printing the text in the interval
      const interval = setInterval(() => {
        // if the text is not fully printed or the count is not reached
        if (charIndex < text.length && charIndex < displayText.length + count) {
          // get the current text
          const currentText = text.slice(0, charIndex + 1);
          // set the current text on the page
          setDisplayText(currentText);
          // increment the current index
          charIndex++;
        } else {
          clearInterval(interval);
          resolve(); // Resolve the promise when the interval is cleared
        }
      }, 50); // Adjust speed as necessary
    });
  };

  const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  };

  const deleteText = (count) => {
    return new Promise((resolve) => {
      let currentIndex = displayText.length;
      let deleteIndex = 0;
      const interval = setInterval(() => {
        if (deleteIndex < count && currentIndex > 0) {
          // Slice the text and update the displayText
          const cutText = text.slice(0, currentIndex - 1);
          setDisplayText(cutText);
          currentIndex--;
          deleteIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100); // Adjust speed as necessary
    });
  };

  return <span>{displayText}</span>;
};

export default Typewriter;
