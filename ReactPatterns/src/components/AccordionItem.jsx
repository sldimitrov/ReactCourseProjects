import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, children, title, className }) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  return (
    <li>
      <h3
        onClick={() => {
          toggleItem(id);
        }}
        className={className}
      >
        {title}
      </h3>
      <div className={`accordion-item-content ${isOpen ? "open" : "close"}`}>
        {children}
      </div>
    </li>
  );
}
