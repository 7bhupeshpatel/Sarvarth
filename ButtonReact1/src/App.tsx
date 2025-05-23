import { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./Components/Button";
import Dashboard from "./Components/TabName";


const buttonTypes = Object.values(ButtonType);
const buttonSizes = Object.values(ButtonSize);


function App() {



  const [selectedType, setSelectedType] = useState<ButtonType>(ButtonType.Primary);
  const [isDestructive, setIsDestructive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(true);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [buttonSize, setButtonSize] = useState<ButtonSize>(ButtonSize.Large);


  return (


    <div className="flex flex-wrap flex-col gap-10 justify-center items-center mt-16">

      <Dashboard />

      <Button typeStyle={selectedType} destructive={isDestructive} disabled={isDisabled} showLeftIcon={showLeftIcon}
        showRightIcon={showRightIcon} size = {buttonSize}>
        Button CTA
      </Button>

      {/* Drop dwon menu */}
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value as ButtonType)}
        className="px-4 py-2 border rounded"
      >
        {buttonTypes.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>

      
      {/* Size Selector (Segmented Toggle) */}
      <div className="flex gap-2">
        {buttonSizes.map((s) => (
          <button
            key={s}
            onClick={() => setButtonSize(s)}
            className={`px-4 py-2 border rounded capitalize transition-all ${
              buttonSize === s ? "bg-blue-500 text-white" : "bg-white text-black"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

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

      {/* Toggle showLeftIcon */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={showLeftIcon}
          onChange={() => setShowLeftIcon((prev) => !prev)}
          className="accent-blue-500"
        />
        Show Left Icon
      </label>

      {/* Toggle showRightIcon */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={showRightIcon}
          onChange={() => setShowRightIcon((prev) => !prev)}
          className="accent-blue-500"
        />
        Show Right Icon
      </label>
    </div>
  );
}

export default App;
