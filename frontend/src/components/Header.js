import { Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar className='center' bg='dark'>
        <Navbar.Brand href='/'>
          <i className='fab fa-cuttlefish fa-lg text-warning'></i>
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Header
