
import './App.css';


function Drawer() {
  return (
    <aside className="drawer">
      <header className="brand-header">
        <img src="/book.png" alt="logo" className="logo" />
        <span className="brand-text">Constitutional Archive</span>
      </header>
      <nav>
        <ul className="info-buttons">
          <li><a href="/search">
          <img src="/history.png" alt="History Icon" className="nav-icon" />
          History
          </a></li>
          <li><a href="/about">
          <img src="/information.png" alt="History Icon" className="nav-icon" />
          About
          </a></li>
        </ul>
        <ul className="bottom-buttons">
          <li><button className="nav-btn login-btn">Login</button></li>
          <li><button className="nav-btn signup-btn">Sign Up</button></li>
        </ul>
      </nav>
    </aside>
  );
}


function App() {
  return (
    <>
    <Drawer />
    <main>
      <section className="search-container">
      <h1 className="search-label">What do you want to download?</h1>
        <form>
          <input
            type="text"
            placeholder="Ask anything..."
            className="search-bar"
          />
          <button type="submit" className="gradient-btn">Go</button>
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
    
  </>

  );
}

export default App;
