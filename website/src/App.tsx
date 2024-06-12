import React from "react";

const App = () => {
  return (
    <>
      <header>
        <h1>Django with React</h1>
      </header>
      <div className="container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        <main>
          <h2>
            A sandbox Django project that uses the React UI library for the web
            application front-end.
          </h2>
          <p>This is the main content area.</p>
        </main>
      </div>
      <footer>
        <p>&copy; 2024 Eric Lagasca. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
