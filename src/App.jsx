import { useState } from "react"
import ForecastCard from "../components/ForecastCard"
import ForecastContainer from "../components/ForecastContainer"
import Header from "../components/Header"
import WeatherCard from "../components/WeatherCard"
import WeatherContainer from "../components/WeatherContainer"
import "./App.css"

function App() {
  const [city, setCity] = useState("")
  const hour = new Date().getHours()

  const isDay = hour >= 6 && hour < 18

  const bgGradient = isDay
    ? "bg-gradient-to-b from-blue-700 via-blue-400 to-sky-400"
    : "bg-gradient-to-b from-indigo-900 via-blue-900 to-indigo-950"
  return (
    <div className={`min-h-screen flex flex-col ${bgGradient} relative`}>
      <Header />
      <WeatherCard />
      <ForecastCard />
      <WeatherContainer city={city} setCity={setCity} />
      {city && <ForecastContainer city={city} />}
    </div>
  )
}

export default App
