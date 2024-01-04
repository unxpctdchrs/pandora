import '../styles/Home.css'
import SideBar from '../components/SideBar'
import Content from '../components/Content'

const Home = () =>{
    return(
        <div className="home-container" id='/'>
            <SideBar />
            <Content />
        </div>
    )
}

export default Home