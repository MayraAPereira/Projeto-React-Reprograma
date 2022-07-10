import { Link } from 'react-router-dom'
import './menu.css'

function Menu() {
    return (
        <ul className='menu'>
            <li className='item'>
                <Link className='link' to="comentario"> Comentário </Link>
            </li>
            <li className='item'>
                <Link className='link' to="portifolio"> Portifólio </Link>
            </li>
            <li className='item'>
                <Link className='link' to="/"> Sobre </Link>
            </li>
        </ul>
    )
}
export default Menu