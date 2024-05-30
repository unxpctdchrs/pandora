import axios from 'axios'

const Url = import.meta.env.VITE_REACT_APP_URL

export const getTopAnimeList = async(page, limit = 25)=>{
    const anime = await axios.get(`${Url}/top/anime?page=${page}&limit=${limit}`)
    return anime.data.data
}

export const getAnimePictures = async() =>{
    const aPic = await axios.get(`${Url}/anime/${23}/pictures`)
    return aPic.data
}

export const getAnimeById = async(id) =>{
    const animId = await axios.get(`${Url}/anime/${id}`)
    return animId.data
}

export const getAnimeSearch = async() =>{
    const animeSearch = await axios.get(`${Url}/anime?q=evangelion`)
    animeSearch.data.data
}