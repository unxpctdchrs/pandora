import '../styles/Content.css'
import { getTopAnimeList } from '../apiManager';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Link } from 'react-scroll'

const Content = () =>{
    const [animeList, setAnimeList] = useState([])
    const [page, setPage] = useState(1)
    
    useEffect(()=>{
        getTopAnimeList(page).then((result) =>{
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

    const TopAnimeList = () =>{
        return animeList.map((anime, i) =>{
            return(
                <div className="content-wrapper" key={i}>
                    <Card className="w-48 h-full">
                        <CardHeader floated={false} className="h-50">
                            <img 
                                src={anime.images.jpg.image_url} 
                                className='h-56 w-full object-center select-none'
                                />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h5" color="blue-gray" className="mb-0 text-sm select-none">
                            {anime.title}
                            </Typography>
                            <Typography variant="h5" color="blue-gray" className="mb-0 text-sm select-none">
                            {anime.score}
                            </Typography>
                        </CardBody>    
                    </Card>
                </div>
            )
        })
    }

    // console.log({animeList})
    console.log(page)

    return(
        <section>
            <div className='content-container' id='content'>
            <TopAnimeList />
            </div>
            <div className="buttons-container">
                <Link
                    onClick={decrementPage}
                    to="content"
                    smooth={true}
                    className='button'
                    >Previous page</Link>
                <Link 
                    onClick={incrementPage}
                    to="content"
                    smooth={true}
                    className='button'
                >Next page</Link>
            </div>
        </section>
    )
}

export default Content