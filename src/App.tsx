import { useState, useEffect } from "react";
import "./App.css";
import Setup from "./pages/Setup";
import Network from "./pages/Network";

function App() {
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const userProfile = localStorage.getItem("userProfile");
    if (userProfile) {
      setHasProfile(true);
    }
  }, []);

  return (
    <div>
      {hasProfile ? (
        <Network />
      ) : (
        <Setup onComplete={() => setHasProfile(true)} />
      )}
    </div>
  );
}

export default App;
