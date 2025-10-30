const WeatherCard = function () {
  return (
    <div className="flex flex-col items-center w-full mt-8">
      <div className="border border-white/30 w-full max-w-2xl h-60 p-6 rounded-xl shadow-lg bg-white/20 backdrop-blur-md flex flex-col justify-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex flex-col text-white">
            <h3 className="text-2xl font-bold">Milano</h3>
            <p className="text-sm">Giovedì, 30 Novembre 2025</p>
          </div>
          <p className="text-4xl font-semibold text-white">15°</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl mt-4">
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <span className="text-sm">Percepita</span>
          <span className="text-xl font-semibold">13°</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <span className="text-sm">Umidità</span>
          <span className="text-xl font-semibold">70%</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <span className="text-sm">Vento</span>
          <span className="text-xl font-semibold">15 km/h</span>
        </div>
        <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
          <span className="text-sm">Pioggia</span>
          <span className="text-xl font-semibold">0 mm</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
