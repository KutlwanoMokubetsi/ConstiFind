
import './App.css';


function Drawer() {
  return (
    <aside className="drawer">
      <nav>
        <ul>
          <li><a href="/search">Search</a></li>
          <li><a href="/about">About</a></li>
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
    <Header />
    <main>
      <section className="search-container">
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
