import React,{useEffect} from 'react'
import {Navigation,Pagination} from 'swiper';



import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const Banner=(props) => {
    const swiper=useSwiper();
    const {banners}=props

    return (
        <div className="container-fluid">
            <div className="banner-list">

                <div className="row">
                    <div className="col-lg-8 col-sm-12 mt-1 banner-left">
                        <Swiper
                            className="w-100 h-100"
                            modules={[Navigation,Pagination]}
                            //pagination={{
                            //    type: "fraction",
                            //}}
                            spaceBetween={20}
                            slidesPerView={1}

                            //breakpoints={{
                            //    0: {
                            //    slidesPerView: 1,
                            //    },
                            //    520: {
                            //    slidesPerView: 2,
                            //    },
                            //    768: {
                            //    slidesPerView: 3,
                            //    },
                            //    1000: {
                            //    slidesPerView: 5,
                            //    }
                        
                            //}
                                
                            //}
                            navigation={true}
                            //onSlideChange={() => console.log('slide change')}
                            //onSwiper={(swiper) => console.log(swiper)}

                        >
                        {banners?.map((banner)=>{
                            return(
                                <SwiperSlide>
                                  <img src="images/banner2.jpg" className="w-100"  style={{height:"300px"}}/>
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

    )
}
export default Banner