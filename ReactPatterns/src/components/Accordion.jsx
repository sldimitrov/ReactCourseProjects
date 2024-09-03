import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("AccordionContext should be surrounded with <Accordion>");
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setItemId] = useState();

  function openItem(id) {
    setItemId(id);
  }

  function closeItem() {
    setItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
