import { useState } from "react";

//* АКАРДІОН
export default function Toggler() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isOpen ? "Close" : "Open"}</button>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error possimus dolore quisquam,
        nobis nulla ad sequi a magnam, corporis quod hic impedit cupiditate perspiciatis molestias
        qui, labore nisi voluptates dignissimos.
      </p>
    </div>
  );
}
// *
