import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    /* <>
     <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React. This is Shiv Website</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
    </> */
    <>
      <div>
        {/* <header style={{ backgroundColor: "white", padding: "10px" }}> */}
        <header className="header">
          <h1 style={{ color: "#007bff" }}>Shiva's Project 3 </h1>
          <nav style={{ margin: "10px 0" }}>
            <ul style={{ listStyle: "outside", padding: 0 }}>
              <li style={{ display: "inline", marginRight: "100px" }}>
                <a
                  href="#home"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  Home
                </a>
              </li>
              <li style={{ display: "inline", marginRight: "100px" }}>
                <a
                  href="#about"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  About
                </a>
              </li>
              <li style={{ display: "inline", marginLeft: "10px" }}>
                <a
                  href="#contact"
                  style={{ textDecoration: "none", color: "#007bff" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main">
          <section className="section">
            <h2> HTML & CSS</h2>
            <article className="article">
              <h3>Why HTML & CSS</h3>
              <p>
                HTML and CSS are essential technologies in web development, with
                HTML providing the structure and content of web pages and CSS
                defining their visual presentation. HTML organizes text, images,
                and links, while CSS enhances the design through styles and
                layouts, ensuring a visually appealing and responsive experience
                across devices. Together, they enable the creation of
                accessible, SEO-friendly, and aesthetically pleasing websites.
              </p>
            </article>

            <h2>What is React.Js</h2>
            <p>
              ReactJS is a popular JavaScript library used for building user
              interfaces, particularly single-page applications. Developed and
              maintained by Facebook, React allows developers to create reusable
              UI components that manage their own state, leading to more
              efficient and maintainable code. Its key features include the
              virtual DOM, which optimizes rendering performance, and a
              component-based architecture that enables modular development.
              React's flexibility, combined with its powerful developer tools,
              has made it a go-to choice for building dynamic and interactive
              web applications.
            </p>
          </section>
        </main>

        <footer className="footer">
          <p>&copy; 2024 My App</p>
        </footer>
      </div>
    </>
  );
}

export default App;
