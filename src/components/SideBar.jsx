import '../styles/SideBar.css'
import logo from '../assets/pandora-logo.svg'
import { NavLink } from 'react-router-dom'

const SideBar = (props) =>{
    return(
        <div className="sidebar-container">
            <div className="sidebar-wrapper">
                <img src={logo} alt="pandora logo" className='logo'/>
                <hr></hr>
                <div className="sidebar-navigation">
                    <NavLink to='/'>
                        <div className={`${props.home_active} home hover:bg-white hover:text-black`}>Home</div>
                    </NavLink>
                    <NavLink to='/animes'>
                        <div className={`${props.animes_active} animes hover:bg-white hover:text-black`}>Animes</div>
                    </NavLink>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default SideBar