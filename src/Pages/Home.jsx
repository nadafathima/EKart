import React,{useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../Redux/slice/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Redux/slice/productSlice';
import firstBanner from '../assets/banner-1.jpg'
import secondBanner from '../assets/banner-2.jpg'
import thirdBanner from '../assets/banner-3.jpg'


function Home() {


    const {products,error,loading,productsPerPage,currentPage}=useSelector((state)=>state.productReducer)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchProductThunk())
      console.log(products);
 

    }, [])

    const totalPages = Math.ceil(products?.length/productsPerPage)

    const lastProductIndex = currentPage * productsPerPage

    const firstProductIndex = lastProductIndex - productsPerPage

    const visibleProduct = products?.slice(firstProductIndex,lastProductIndex)

    const handleNext = ()=>{
        if(currentPage<totalPages){
            dispatch(nextPage())
        }
    }
    const handlePrev = ()=>{
        if(currentPage>1){
            dispatch(prevPage())
        }
    }

  return (
    <>
        <header className="bg-dark ">
            <div className=" ">
                <div className="text-center text-white">
            <Carousel>
            <Carousel.Item>
             <img src={firstBanner} 
             alt="img1" className=' ' width={'100%'} style={{height:'70vh'}}/>
            </Carousel.Item>
            <Carousel.Item>
             <img src={secondBanner} 
             alt="img2" className=' ' width={'100%'} style={{height:'70vh'}}/>
            </Carousel.Item>
            <Carousel.Item>
             <img src={thirdBanner}
              alt="img3" className=' ' width={'100%'} style={{height:'70vh'}}/>
            </Carousel.Item>
          </Carousel>
       </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {
                        loading ?
                        <h3>
                        <Spinner animation="border" role="status">
                        
                      </Spinner>
                      <span >Loading...</span>
                      </h3>
                        :
                        (
                            error ?
                            <h3>{error}</h3>
                            :
                            <>
                                {visibleProduct?.map(
                                    item=> (
                                            <div className="col mb-5">
                                            <div className="card h-100">
                                                <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{item.title}</h5>
                                                        ${item.price}
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                                  <Link to={`/view/${item?.id}`} className='btn btn-primary'>View</Link>
                                                </div>
                                            </div>
                                        </div>
            
                                        )
                                )}
        
                            </>
    
                        )
                        
                    }

                </div>
            </div>
        </section>
        <div className="mt-4 d-flex justify-content-center">
            <div>
                <button className='btn' onClick={handlePrev}>
                    <i className="fa-solid fa-angles-left"/>
                </button>
                {' '}
                {currentPage}/{totalPages}
                {' '}
                <button className='btn' onClick={handleNext}>
                <i className="fa-solid fa-angles-right"/>
                   
                </button>
            </div>
        </div>
    </>
  )
}

export default Home
