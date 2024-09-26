import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <div className='container-fluid bg-primary p-3 text-light'>
        <Row>
            <Col>
            <h4>EKart</h4>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minus quis dolore dolores esse nemo nobis labore soluta culpa vitae non autem quos vero, dicta recusandae facere aspernatur consequuntur quisquam.</p>

            </Col>
            <Col>
            <h4>Links</h4>
            <div className='d-flex flex-column justify-content-between'>
                <Link to={'/'}>Home</Link>
                <Link to={'/cart'}>Cart</Link>
                <Link to={'/wish'}>Wishlist</Link>
            </div>
            </Col>
            <Col>
            <h4>Feedbacks</h4>
            <textarea name="" id="" className="form-control"></textarea>
            <button className='btn btn-success mt-3'>Send</button>
            </Col>
        </Row>

      </div>
    </>
  )
}

export default Footer
