const WeatherCard = ({ data }) => {
  if (!data) return null

  const { name, main, wind, rain } = data

  return (
    <div className="flex flex-col items-center w-full mt-5 px-4 sm:px-6 md:px-0">
      <div className="border border-white/30 w-full max-w-2xl h-60 p-6 rounded-xl shadow-lg bg-white/20 backdrop-blur-md flex flex-col justify-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col text-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-sm">{new Date().toLocaleDateString("it-IT")}</p>
          </div>
          <p className="text-4xl font-semibold text-white">
            {Math.round(main.temp)}°
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mt-4">
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white min-w-[120px]">
          <span className="text-sm">Percepita</span>
          <span className="text-xl font-semibold">
            {Math.round(main.feels_like)}°
          </span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white min-w-[120px]">
          <span className="text-sm">Umidità</span>
          <span className="text-xl font-semibold">{main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white min-w-[120px]">
          <span className="text-sm">Vento</span>
          <span className="text-xl font-semibold">{wind.speed} km/h</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white min-w-[120px]">
          <span className="text-sm">Pioggia</span>
          <span className="text-xl font-semibold">{rain?.["1h"] || 0} mm</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
