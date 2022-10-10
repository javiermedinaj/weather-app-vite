import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import Icons from './components/Icons'

function App() {
  const [search, setSearch] = useState("Buenos aires")
  const [values, setValues] = useState("")
  const [icon, setIcon] = useState("")


  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}&lang=es`

  const getData = async () => {
    await fetch(URL)
      .then(response => { return response.json() })
      .then(data => {
        if (data.cod >= 400) {
          setValues(false)
        } else {
          setIcon(data.weather[0].main)
          setValues(data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearch(e.target.value)
    }
  }
  useEffect(() => {
    getData()
  }, [search])


  return (
    <div className="App">
      <div>
        <h2>Weather app</h2>
        <button>
          <input
            onKeyDown={handleSearch}
            type="text"
            autoFocus
          />
        </button>
      </div>

      <div>
        {
          (values) ? (
            <div>
              <h2>{values.name}</h2>
              <p>{values.main.temp.toFixed(0)}&deg;</p>
              <img src={Icons(icon)} alt="icon weather" />
              <div>
                <p> {values.main.temp_min.toFixed(0)}&deg;  |  {values.main.temp_max.toFixed(0)}&deg;</p>
              </div>
            </div>
          ) : (
            <h3>Escriba el nombre de la ciudad y presione ENTER</h3>
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default App
