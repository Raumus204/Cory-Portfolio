export default function Footer () {
    const now = new Date();
    const currentTime = now.toLocaleTimeString(); 
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} {currentTime}</p>
      </footer>
    );
  };
  