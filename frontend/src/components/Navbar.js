import { Link } from 'react-router-dom'
import Logo from '../assets/logo_resize_square.png'

const Navbar = () => {
    return (
        <header>
            <div className="navbar-container">   
            <Link to="/">
                <img className='logo' src={Logo} alt='Logo'/>
                {/* <h1>M</h1> */}
            </Link>       
            <ul className='nav-list'>
            <li className='opts'>
                <Link to="/">Home</Link>
            </li>
            <li className='nav-list'>
                <Link to="/blog">Blog</Link>
            </li>     
            </ul>
        </div>
        </header>
    )
}

export default Navbar