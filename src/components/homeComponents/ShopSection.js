import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import {useDispatch,useSelector} from "react-redux";

import Loading from "../LoadingError/Loading"
import Message from "../LoadingError/Error";
import {listProduct} from "../../Redux/Actions/ProductAction.js"
import {PRODUCT_LIST_RESET} from "../../Redux/Constants/ProductConstants";

import {listDrugStore} from "../../Redux/Actions/DrugStoreActions.js"
import {DRUGSTORE_LIST_RESET} from "../../Redux/Constants/DrugStoreConstants";






import CardSlider from "../CardSlider";
import CardSlider2 from "../CardSlider2";

const ShopSection=(props) => {
  const {keyword,pageNumber}=props //{keyword,pageNumber,banners}=props 
  const dispatch=useDispatch()

  //const productList=useSelector((state) => state.productList)
  //const {loading,error,products,currentPage,totalPage}=productList

  const drugstoreList=useSelector((state) => state.drugstoreList)
  const {loading,error,drugstores,currentPage,totalPage}=drugstoreList
  



  //contentList

  //categotyList

  //categoryDrug




  useEffect(() => {
    dispatch({type: PRODUCT_LIST_RESET})
    dispatch(listProduct(keyword,pageNumber))

    dispatch({type: DRUGSTORE_LIST_RESET})
    dispatch(listDrugStore(keyword,pageNumber))

    
  },[dispatch,keyword,pageNumber])
  return (
    <>
      <div className="container">

        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              {/* card-slider  */}
              <h3>Sản phẩm mới/Xem tất cả</h3>
              <CardSlider2 />
              
              {/* card-slider */}
              <h3>Sản phẩm chính</h3>
              <div className="shop-container row">
                {
                  loading? (<div className="mb-5"><Loading /></div>):error? (<Message variant="alert-danger">{error}</Message>)
                    :
                    (
                      <>
                        {drugstores&&drugstores.map((drugstore) => (
                          <div
                            className="shop col-lg-3 col-md-6 col-sm-6"
                            key={drugstore?.product?._id}
                          >
                            <div className="border-product">
                              <Link to={`/products/${drugstore?._id}`}>
                                <div className="shopBack">
                                  <img src={drugstore?.product?.image?.slice(0,0+1)[0]} alt={drugstore?.product?.name} />
                                </div>
                              </Link>

                              <div className="shop-text">
                                <p>
                                  <Link to={`/products/${drugstore?._id}`}>
                                    {drugstore?.product?.name}
                                  </Link>
                                </p>

                                <Rating
                                  value={drugstore?.product.rating}
                                  text={`${drugstore?.product.numberReviews} reviews`}
                                />
                                <h4>${drugstore?.product.price}</h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )
                }
                {/* Pagination */}
                <Pagination
                  totalPage={totalPage}
                  currentPage={currentPage}
                  keyword={keyword? keyword:""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
