import SideBar from '../components/SideBar'
import Content from '../components/Content'
import Test from '../components/Test'

const Animes = () =>{
    return(
        <div className="home-container" id='/'>
            <SideBar animes_active="bg-white text-black"/>
            <Content />
            {/* <Test /> */}
        </div>
    )
}

export default Animes