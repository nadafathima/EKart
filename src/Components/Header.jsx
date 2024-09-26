import React,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Cart from '../Pages/Cart';
import { useSelector,useDispatch } from 'react-redux';
import { serachWithKey } from '../Redux/slice/productSlice';


function Header() {

  const {items}=useSelector((state)=>state.wishReducer)
  const {cart}=useSelector((state)=>state.cartReducer)

  const [key, setKey] = useState("")

  const dispatch = useDispatch()

  return (
    <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
          <i className="fa-solid fa-cart-shopping fa-xl" />
            {' '}
            EKart
            </Link>
          </Navbar.Brand>
          <div className='d-flex'>
          <div className='d-flex'>
            <input type="text" className="form-control" placeholder='Enter Keyword to Search' onChange={(e)=>setKey(e.target.value)}/>
            <button className="btn btn-success me-4" onClick={()=>dispatch(serachWithKey(key))}>Search</button>
            </div>
            <Link className='btn border border-1 border-dark me-3' to={'/wish'} >
            <i className="fa-solid fa-heart" style={{color: "#fa052a",}} />
            Wishlist
            {' '}
            <span className='badge bg-dark'>
            {items?.length}
            </span>
            </Link>
            <Link className='btn border border-1 border-dark me-3' to={'/cart'}>
            <i className="fa-solid fa-cart-shopping " />
            Cart
            {' '}
            <span className='badge bg-dark'>
            {cart?.length}
            </span>

            </Link>
        </div>

        </Container>
      </Navbar>
    </>
    
  )
}

export default Header
