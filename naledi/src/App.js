
import './App.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Search</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Naledi. All rights reserved.</p>
      <p>Privacy Policy | Terms of Service</p>
    </footer>
  );
}

function App() {
  return (
    <>
    <Header />
    <main>
      <section className="search-container">
        <form>
          <input
            type="text"
            placeholder="Ask anything..."
            className="search-bar"
          />
          <button type="submit">Go</button>
        </form>
      </section>
      <section className="info-section">
        <article>
          <h2>Understand Your Query</h2>
          <p>
            We parse and analyze your input intelligently to deliver precise
            answers.
          </p>
        </article>
        <article>
          <h2>Get Reliable Results</h2>
          <p>
            Our engine uses curated sources to provide trustworthy, referenced
            answers.
          </p>
        </article>
        <article>
          <h2>Interact Naturally</h2>
          <p>Chat in natural language—no tech jargon needed.</p>
        </article>
      </section>
    </main>
    <Footer />
    
  </>

  );
}

export default App;
