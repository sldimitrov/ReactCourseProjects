import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, children, title, className }) {
  const { openItemId, openItem, closeItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function handleClick() {
    if (isOpen) {
      closeItem();
    } else {
      openItem(id);
    }
  }

  return (
    <li>
      <h3 onClick={handleClick} className={className}>
        {title}
      </h3>
      <div className={`accordion-item-content ${isOpen ? "open" : "close"}`}>
        {children}
      </div>
    </li>
  );
}
