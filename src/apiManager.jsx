import axios from 'axios'

const Url = import.meta.env.VITE_REACT_APP_URL

export const getTopAnimeList = async(page)=>{
    const anime = await axios.get(`${Url}/top/anime?page=${page}`)
    return anime.data.data
}