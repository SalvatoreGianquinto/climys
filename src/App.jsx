import { useState } from "react"
import ForecastCard from "../components/ForecastCard"
import ForecastContainer from "../components/ForecastContainer"
import Header from "../components/Header"
import WeatherCard from "../components/WeatherCard"
import WeatherContainer from "../components/WeatherContainer"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  return (
    <div className="min-h-screen bg-blue-900 flex flex-col relative">
      <Header />
      <WeatherCard />
      <ForecastCard />
      <WeatherContainer city={city} setCity={setCity} />
      {city && <ForecastContainer city={city} />}
    </div>
  )
}

export default App
