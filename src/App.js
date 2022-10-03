import profile from './vegeta-b.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <body>

          <main class="w-100 m-auto">
            <form>
              <img src={profile} className="App-logo" alt="profile" />
              <h1>Dee Kay</h1>
              <h3>Fullstack/Frontend Developer</h3>

              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary px-4">📧 email</button>
                <button type="button" class="btn btn-outline-primary px-4">🕴️ linkedin</button>
              </div>



              <div class="form-floating gap">
                <h5>About</h5>
                <p>I love to code and code to love more... Getting into fullstack was the starting point but i love design and creating visually appeasing interfaces. So frontend is for me, what butter is to toast.</p>
              </div>
              <div class="form-floating">
                <h5>Interests</h5>
                <p>coding, coding, blokchain, coding, muay thai, coding, travel, coding...</p>
              </div>
            </form>
          </main>



        </body>
      </header>


    </div>
  );
}

export default App;
