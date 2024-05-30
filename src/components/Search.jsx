import { useEffect, useState } from "react"
import { getAnimeSearch } from "../apiManager"

const Search = () =>{
    const [anime, setAnime] = useState([])

    useEffect(()=>{
        getAnimeSearch().then((result) =>{
            setAnime(result)    
        })
    }, [])

    
    if(anime == undefined){
        return(
            console.log("loading")
        )
    }
    
    const search = async(q) =>{
        // if(q.length > 3){
                // const query = await getAnimeSearch(q)
                // setAnime(query.data)
        //     // console.log({query})
        // }
        // if(q === ''){
            //     getAnimeSearch().then((result) =>{
                //         setAnime(result)
                //     })
                // }
                // console.log(q)
            }
            
        return(
        // <input
        //         className='anime-search'
        //         placeholder='search'
        //         onChange={(({target}) => search(target.value))}
        // />
            console.log({anime})
        )
    }

export default Search