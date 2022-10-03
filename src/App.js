import profile from './vegeta-b.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-body">

        <body>

          <main class="w-100 m-auto">
            <img src={profile} className="App-logo" alt="profile" />
            <h1>Dee Kay</h1>
            <h3>Fullstack/Frontend Dev</h3>

            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-outline-dark px-4">📧 email</button>
              <button type="button" class="btn btn-outline-dark px-4">🕴️ linkedin</button>
            </div>

            <div>
              <h5>About</h5>
              <p>I love to code and code to love more... Getting into fullstack was the starting point but i love design and creating visually appeasing interfaces. So frontend is for me, what butter is to toast.</p>
              <h5>Interests</h5>
              <p>coding, coding, blokchain, coding, muay thai, coding, travel, coding...</p>
            </div>

          </main>
        </body>
      </header>


    </div>
  );
}

export default App;
