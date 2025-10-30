import axios from "axios"
import { useEffect, useState } from "react"
import SearchBar from "./SearchBar"
import WeatherCard from "./WeatherCard"

const WeatherContainer = function () {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState("Milano")

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

  useEffect(() => {
    if (!city) return

    axios
      .get(BASE_URL, {
        params: {
          q: city,
          units: "metric",
          appid: API_KEY,
          lang: "it",
        },
      })
      .then((response) => {
        setWeather(response.data)
      })
      .catch((error) => {
        console.log("Errore nel caricamento del meteo", error)
        setWeather(null)
      })
  }, [city])

  const handleSearch = (newCity) => {
    setCity(newCity)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </div>
  )
}

export default WeatherContainer
