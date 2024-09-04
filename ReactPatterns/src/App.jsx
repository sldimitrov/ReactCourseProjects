import Accordion from "./components/Accordion";

function App() {
  return (
    <main>
      <h1>React Patterns & Practices</h1>
      <Accordion className="accordion">
        <Accordion.Item className="accordion-item">
          <Accordion.Title className="accordion-item-title" id="experience">
            10+ years of experience
          </Accordion.Title>
          <Accordion.Content className="accordion-item-content" id="experience">
            <article>
              <p>This should be bla.. bla.. bla...</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item className="accordion-item">
          <Accordion.Title id="local-guides" className="accordion-item-title">
            We are working hahahahah
          </Accordion.Title>
          <Accordion.Content
            id="local-guides"
            className="accordion-item-content"
          >
            <article>
              <p>This should be bla.. bla.. bla...</p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </main>
  );
}

export default App;
