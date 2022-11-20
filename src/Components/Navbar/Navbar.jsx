import logo from '../../Assets/Images/project3_logo.jpg';
import './Navbar.css'
export default function Navbar()
{
    return(
        <nav className='nav-bar'>
            <img src={logo} alt="" width="80px" />
            <h4>airbnb</h4>
        </nav>
    )
}