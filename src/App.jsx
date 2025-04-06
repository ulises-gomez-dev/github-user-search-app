import { createContext, useState } from 'react';
import './App.css'

const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <div>
          <h1>devfinder</h1>
          <div>
            <h3>
              LIGHT
            </h3>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
