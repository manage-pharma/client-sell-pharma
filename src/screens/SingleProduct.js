import React,{useEffect,useState} from 'react';
import Header from './../components/Header';
import Rating from '../components/homeComponents/Rating';
import {Link} from 'react-router-dom';
import Loading from './../components/LoadingError/Loading';
import Message from './../components/LoadingError/Error';
import {useParams,useHistory} from 'react-router-dom';
import {
  createProductReview,
  listProductDetails,
} from '../Redux/Actions/ProductAction';
import {useSelector,useDispatch} from 'react-redux';
import {PRODUCT_CREATE_REVIEW_RESET,PRODUCT_DETAILS_RESET} from '../Redux/Constants/ProductConstants';
import {
  singleDrugStore,
} from '../Redux/Actions/DrugStoreActions';

import {DRUGSTORE_SINGLE_RESET} from '../Redux/Constants/DrugStoreConstants';
import {addToCart} from '../Redux/Actions/CartAction';
import moment from 'moment';

const SingleProduct=() => {
  const [qty,setQty]=useState(1);
  const [rating,setRating]=useState(5);
  const [comment,setComment]=useState('');
  const [tab,setTab]=useState(0)





  const {id}=useParams();
  const history=useHistory();
  const dispatch=useDispatch();

  const {userInfo}=useSelector((state) => state.userLogin);
  //const {loading,error,product}=useSelector((state) => state.productDetails);
  const {loading,error,drugstore}=useSelector((state) => state.drugstoreSingle);
  
  const {error: errorReview,success}=useSelector((state) => state.productReview);
  console.log(drugstore);


  const AddToCart=(e) => {
    e.preventDefault();
    dispatch(addToCart(id,qty));
    history.push(`/cart/${id}?qty=${qty}`);
  };

  const handleSubmitReview=(e) => {
    e.preventDefault();
    console.log(rating,comment);
    dispatch(createProductReview(drugstore?.product?._id,{rating,comment}));
  };

  useEffect(() => {
    //if(success) {
    //  setRating(0);
    //  setComment('');
    //  dispatch({type: PRODUCT_CREATE_REVIEW_RESET});
    //}

    //dispatch(listProductDetails(id));
    //return () => {
    //  dispatch({type: PRODUCT_DETAILS_RESET});
    //};
    dispatch(singleDrugStore(id));
    return () => {
      dispatch({type: DRUGSTORE_SINGLE_RESET});
    };

  },[id,dispatch,success]);


  const isActive=(index) => {
    if(tab===index) return " active";
    return ""
  }


  return (
    <>
      <Header />
      <div className="container single-product">
        {loading? (
          <Loading />
        ):error? (
          <Message>{error}</Message>
        ):(
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">

                    <img src={drugstore?.product?.image?.slice(tab,tab+1)[0]} alt={`tab[${tab}]`}
                      className="d-block img-thumbnail rounded mt-4 w-100"
                      style={{height: '350px'}} />



                    <div className="row mx-0" style={{cursor: 'pointer'}} >
                      {drugstore?.product?.image?.map((img,index) => (
                        <img key={index} src={img} alt={img}
                          className={`img-thumbnail rounded ${isActive(index)}`}
                          style={{height: '80px',width: '20%'}}
                          onClick={() => setTab(index)} />
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{drugstore?.product?.name}</div>
                  </div>
                  <p>{drugstore?.product?.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Price</h6>
                      <span>$<span style={{textDecoration:"line-through"}}>{drugstore?.product?.price} </span> <span style={{fontSize:"10px",color:"red"}}> (-{drugstore?.discount*100}%)</span></span>
                      
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>BestPrice</h6>
                      <span>${drugstore?.product?.price*(1-drugstore?.discount)}  </span>
                      
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      
                      <span style={{fontSize:"15px"}}>Khi mua hàng bạn sẽ nhận được <span style={{color:"green"}}>{drugstore?.product?.price*drugstore?.refunded} </span> điểm thành viên</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Status</h6>
                      {drugstore?.countInStock>0? (
                        <span>In Stock</span>
                      ):(
                        <span>unavailable</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Reviews</h6>
                      <Rating
                        value={drugstore?.product?.rating}
                        text={`${drugstore?.product?.numberReviews} reviews`}
                      />
                    </div>
                    {drugstore?.countInStock>0? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>Quantity</h6>
                          <select onChange={(e) => setQty(e.target.value)}>
                            {[...Array(drugstore?.countInStock).keys()].map(
                              (x) => (
                                <option key={x+1} value={x+1}>
                                  {x+1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button onClick={AddToCart} className="round-black-btn">
                          Add To Cart
                        </button>
                      </>
                    ):null}
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                {drugstore?.product?.reviews?.length===0&&(
                  <Message variant={'alert-info mt-3'}>No Reviews</Message>
                )}
                {drugstore?.product?.reviews?.map((review,index) => (
                  <div
                    key={index}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))
                }
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4">
                  {/* {loadingReview && <Loading/>}
                  {errorReview && (
                    <Message variant="alert-danger">{errorReview}</Message>
                  )} */}
                </div>

                <form onSubmit={handleSubmitReview}>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select
                      onChange={(e) => setRating(e.target.value)}
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"
                    >
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="my-3">
                    {!userInfo? (
                      <Message variant={'alert-warning'}>
                        Please{' '}
                        <Link to="/login">
                          " <strong>Login</strong> "
                        </Link>{' '}
                        to write a review{' '}
                      </Message>
                    ):(
                      !errorReview? (
                        <button className="col-12 bg-black border-0 p-3 rounded text-white">
                          SUBMIT
                        </button>
                      ):(
                        <Message variant="alert-danger">{errorReview}</Message>
                      )

                    )}
                  </div>
                </form>
                {/* <div className="my-3">
                    {
                      
                    }
                  </div> */}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
