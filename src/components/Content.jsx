import '../styles/Content.css'
import { getTopAnimeList } from '../apiManager';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';

const Content = (props) =>{
    const [animeList, setAnimeList] = useState([])
    const [page, setPage] = useState(1)
    
    useEffect(()=>{
        getTopAnimeList(page, props.limit).then((result) =>{
            setAnimeList(result)
        })
    }, [page])

    const incrementPage = () => {
        setPage(page + 1)
    }
    
    const decrementPage = () => {
        if(page <= 1){
            setPage(1)
        }
        if(page >1){
            setPage(page - 1)
        }
    }

    // console.log({animeList})

    const TopAnimeList = () =>{
        return animeList.map((anime, i) =>{
            return(
                <div className="content-wrapper" key={i}>
                    <Card className="cardd">
                        <CardHeader floated={false} className="h-50">
                            <NavLink to={`/anime/${anime.mal_id}`}>
                                <img 
                                    src={anime.images.jpg.image_url} 
                                    className='h-56 w-full object-center select-none'
                                />
                            </NavLink>
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h5" color="blue-gray" className="mb-0 text-sm select-none">
                            {anime.title}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="text-sm select-none">
                            {anime.score}
                            </Typography>
                        </CardBody>    
                    </Card>
                </div>
            )
        })
    }

    // console.log({animeList})
    // console.log(page)

    return(
        <section>
            <h1 className='topanime'>Top Anime</h1>
            <div className='content-container' id='content'>
                <TopAnimeList />
            </div>
            <div className={`${props.show} buttons-container`}>
                <Link
                    onClick={decrementPage}
                    to="content"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className='button hover:bg-gray-500 hover:text-white select-none'
                    >Previous page</Link>
                <Link 
                    onClick={incrementPage}
                    to="content"
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className='button hover:bg-gray-500 hover:text-white select-none'
                >Next page</Link>
            </div>
        </section>
    )
}

export default Content