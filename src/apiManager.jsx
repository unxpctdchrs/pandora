import axios from 'axios'

const Url = import.meta.env.VITE_REACT_APP_URL

export const getTopAnimeList = async(page, limit = 25)=>{
    const anime = await axios.get(`${Url}/top/anime?page=${page}&limit=${limit}`)
    return anime.data.data
}