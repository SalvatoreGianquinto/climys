import axios from "axios"
import { useEffect, useState } from "react"
import ForecastCard from "./ForecastCard"

const ForecastContainer = ({ city }) => {
  const [forecast, setForecast] = useState([])

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

  useEffect(() => {
    if (!city) return

    axios
      .get(FORECAST_URL, {
        params: {
          q: city,
          units: "metric",
          appid: API_KEY,
          lang: "it",
        },
      })
      .then((res) => {
        const data = res.data.list

        const dailyMap = {}
        data.forEach((entry) => {
          const dateKey = new Date(entry.dt * 1000).toLocaleDateString("it-IT")
          if (!dailyMap[dateKey]) {
            dailyMap[dateKey] = {
              dt: entry.dt,
              temp_min: entry.main.temp_min,
              temp_max: entry.main.temp_max,
              weather: entry.weather[0],
            }
          } else {
            dailyMap[dateKey].temp_min = Math.min(
              dailyMap[dateKey].temp_min,
              entry.main.temp_min
            )
            dailyMap[dateKey].temp_max = Math.max(
              dailyMap[dateKey].temp_max,
              entry.main.temp_max
            )
          }
        })

        const dailyArray = Object.values(dailyMap).slice(0, 7)
        setForecast(dailyArray)
      })
      .catch((err) => {
        console.error("Errore fetch forecast:", err)
        setForecast([])
      })
  }, [city])

  return <div>{forecast.length > 0 && <ForecastCard data={forecast} />}</div>
}

export default ForecastContainer
