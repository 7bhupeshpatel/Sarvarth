import  { useState } from "react";
import Button from "./Components/Button";


const typeStyles = ["primary", "secondary", "tertiary", "outlined", "link"] as const;
function App() {
  

   const [selectedType, setSelectedType] = useState<typeof typeStyles[number]>("primary")
  const [isDestructive, setIsDestructive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  
  return (
<div className="flex flex-wrap flex-col gap-10 justify-center items-center mt-16">
      <Button typeStyle = {selectedType} destructive = {isDestructive} disabled = {isDisabled}>
        Button CTA 
      </Button>

      {/* Drop dwon menu */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value as typeof typeStyles[number])}
        className="px-4 py-2 border rounded"
      >
        {typeStyles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>

      {/* Toggle Switch for destructive */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isDestructive}
          onChange={() => setIsDestructive((prev) => !prev)}
          className="accent-red-500"
        />
        Destructive Mode
        
      </label>
       {/* Toggle switch for disabled */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={() => setIsDisabled((prev) => !prev)}
          className="accent-gray-500"
        />
        Disabled
      </label>
    </div>
  );
}

export default App;
