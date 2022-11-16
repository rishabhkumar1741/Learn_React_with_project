import logo from '../../Assets/Images/logo.svg'
// import logo from '../../Assets/Images/1.svg'
import './Header.css'

function Header() {
  return (
    <header className='header-nav'>
      <nav className='nav'>
        <img src={logo} width='100px' />
        <ul className='nav-item'>
          <li className=''>Pricing</li>
          <li className=''>About</li>
          <li className=''>Contact</li>
        </ul>

      </nav>
    </header>
  )
}


export default Header;