import '../styles/Home.css'
import SideBar from '../components/SideBar'
import Crsl from '../components/Crsl'
import Content from '../components/Content'

const Home = () =>{
    return(
        <div className="home-container" id='/'>
            <SideBar />
            <Crsl />
            <Content limit={7} show="hidden"/>
        </div>
    )
}

export default Home