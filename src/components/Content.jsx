import '../styles/Content.css'
import { getTopAnimeList } from '../apiManager';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

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
        setPage(page - 1)
    }

    const TopAnimeList = () =>{
        return animeList.map((anime, i) =>{
            return(
                <div className="content-wrapper" key={i}>
                    <Card className="w-48">
                        <CardHeader floated={false} className="h-50">
                            <img 
                                src={anime.images.jpg.image_url} 
                                className='h-full w-fit object-center select-none'
                                />
                        </CardHeader>
                        <CardBody className="text-center">
                            <Typography variant="h5" color="blue-gray" className="mb-0 text-sm select-none">
                            {anime.title}
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
        <div className='content-container'>
           <TopAnimeList />
            <div className="buttons">
                <Button onClick={decrementPage}>Previous page</Button>
                <Button onClick={incrementPage}>Next page</Button>
            </div>
        </div>
    )
}

export default Content