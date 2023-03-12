import React,{useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {singleContent} from "../Redux/Actions/ContentAction.js"
import {Navigation,Pagination} from 'swiper';
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const Banner=() => {
    
    const swiper=useSwiper();
    const dispatch = useDispatch();

    const contentSingle=useSelector((state) => state.contentSingle)
    const {contentUp}=contentSingle
    const data = Object.assign({}, contentUp[0]);
    const {banners}=data
   
    
    

    useEffect(()=>{
        dispatch(singleContent())
    }, [dispatch])
    

    return (
        <div className="container-fluid">
            <div className="banner-list">

                <div className="row">
                    <div className="col-lg-8 col-sm-12 mt-1 banner-left">
                        <Swiper
                            className="w-100 h-100"
                            modules={[Navigation,Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={true}
                        >
                        {banners?.map((banner)=>{
                            return(
                                <SwiperSlide>
                                  <img src={"images/banner2.jpg"} className="w-100"  style={{height:"300px"}}/>
                                </SwiperSlide>
                            )
                        })}    
                        </Swiper>
                    </div>
                    <div className="col-lg-4 col-sm-0 banner-right">
                        <div className="row">
                            <div ><img src={"images/banner2.jpg"} alt="new fashion summer sale" class="banner-img-min" style={{height:"143px"}} /></div>
                        </div>
                        <div className="row ">
                            <div ><img src={"images/banner2.jpg"} alt="new fashion summer sale" class="banner-img-min"  style={{height:"143px"}}/></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        //<div>{contentUp[0]?.banner?.map((item, index)=>{
        //    return(
        //        <>
        //            <img
        //             src={item?.image}
        //                alt="User"
        //            />   
        //            <div>BANNER{index+1}</div>
        //        </>
        //    )
    
        // })}</div>

    )
}
export default Banner