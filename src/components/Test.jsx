import '../styles/Test.css'
import { getAnimePictures } from '../apiManager'
import { useEffect, useState } from 'react'

const Test = () =>{
    const [animePic, setAnimePic] = useState([])

    useEffect(()=>{
        getAnimePictures().then((result) =>{
            setAnimePic(result)
        })
    },[])

    console.log({animePic})

    return(
       <section className='test-container'>
            test
       </section>
    )
}

export default Test