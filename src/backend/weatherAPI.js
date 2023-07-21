// import http from './http'

// export async function getFilms(page) {
//   try {
//     const response = await http.get(`discover/movie`, {
//       params: {
//         page,
//         'language': 'en-US',
//         'sort_by': 'revenue.desc',
//       }
//     });
//     return response.data.results
//   } catch (error) {
//     console.error(error);
//   }
// }
import { API_KEY, BASE_URL } from '@/constants'

export async function getCityWeather(city) {
  try {
    const weather = await fetch(`${BASE_URL}?q=${city}&units=metric&lang=uk&appid=${API_KEY}`)
      .then( (response) => response.json())
    return weather
  } catch (error) {
      console.error(error)
  }
}
