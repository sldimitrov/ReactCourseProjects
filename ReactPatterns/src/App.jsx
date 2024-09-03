import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

function App() {
  return (
    <main>
      <h1>React Patterns & Practices</h1>
      <Accordion className="accordion">
        <AccordionItem id="1" className="accordion-item" title={"Acc 1"}>
          <article>
            <p>This should be bla.. bla.. bla...</p>
          </article>
        </AccordionItem>
        <AccordionItem id="2" className="accordion-item" title={"Acc 1"}>
          <article>
            <p>This should be bla.. bla.. bla...</p>
          </article>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default App;
