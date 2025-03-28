import { useState } from "react";

type SetupProps = {
  onComplete: () => void;
};

export default function Setup({ onComplete }: SetupProps) {
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim()) {
      setError("Please enter a name");
      return;
    }
    localStorage.setItem("userProfile", JSON.stringify({ displayName }));
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <label htmlFor="displayName">
          Choose Display Name
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
              setError("");
            }}
            className={`w-full p-2 border rounded ${
              error ? "border-red-500" : "focus:ring-2 focus:ring-blue-500"
            }`}
            placeholder="Type your display name..."
            autoFocus
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </label>
        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
