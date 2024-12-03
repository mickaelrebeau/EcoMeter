export const useWeatherData = () => {
  const config = useRuntimeConfig()
  const { data, error, refresh } = useFetch('/api/weather', {
    baseURL: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
      appid: config.public.openWeatherApiKey
    }
  })

  return {
    weatherData: data,
    error,
    refresh
  }
}