import { useEffect, useState } from 'react';
import { getAnimeById } from '../apiManager';
import { useParams } from 'react-router-dom';
import '../styles/AnimeDetail.css'
import SideBar from '../components/SideBar';

export const AnimeDetail = () => {
    const { animeId } = useParams()

    const [anime, setAnime] = useState([])

    useEffect(()=>{
        getAnimeById(animeId).then((result) =>{
            setAnime(result)
        })
    }, [animeId])

    console.log({anime})

    if(anime.data == undefined){
        return(
            <div className="anime-details-wrapper">
                <h1>loading</h1>
            </div>
        )
    }
    return (
        
        <div className="home-container">
            <SideBar animes_active="bg-white text-black"/>
            <div className='anime-details'>
                <div className="anime-details-wrapper">
                    <img src={anime.data.images.jpg.image_url}/>
                    <h1>{anime.data.title}</h1>
                    <h1>Date aired : {anime.data.aired.string}</h1>
                    <h1>Episodes : {anime.data.episodes}</h1>
                    <h1>Duration : {anime.data.duration}</h1>
                    <h1>Status : {anime.data.status}</h1>
                    <a href={anime.data.trailer.url}>Trailer : {anime.data.trailer.url}</a>
                </div>
            </div>
        </div>
    )
}
