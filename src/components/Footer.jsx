import { useState, useEffect } from 'react';

export default function Footer() {
  // State to store the current time
  const [currentTime, setCurrentTime] = useState('');

  // Function to update the time
  function updateTime() {
    let now = new Date();
    setCurrentTime(now.toLocaleTimeString());  
  }

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <p>
        <a href="https://github.com/Raumus204" target="_blank">
            <img src="mark-white.png" alt="GitHub Logo" width="30" height="30"></img>
        </a>
    </p>
      <p>&copy; {new Date().getFullYear()} {currentTime}</p>
    </footer>
  );
}
