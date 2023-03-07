import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <div className='navbar-container'>
                <ul className='footer'>
                <h3>Available for select freelance opportunities</h3>
                
                    <li>
                        <h4>
                            Have an exciting project you want to discuss? Contact me:
                        </h4>
                    </li>
                    <li className='email'>
                        <Link to='mailto:maragaw24@gmail.com'>
                            maragaw24@gmail.com
                        </Link>                        
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer