import React,{useEffect} from 'react'
import {Navigation,Pagination} from 'swiper';



import {Swiper,SwiperSlide,useSwiper} from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';



const CardSlider2=() => {

    const swiper=useSwiper();
    return (


        <Swiper
            modules={[Navigation,Pagination]}
            pagination={{
                type: "fraction",
            }}
            spaceBetween={20}
            slidesPerView={5}

            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1000: {
                  slidesPerView: 5,
                }
        
              }
                
            }
            navigation={true}
            //onSlideChange={() => console.log('slide change')}
            //onSwiper={(swiper) => console.log(swiper)}

        >
            <SwiperSlide>
                <div className="card swiper-slide">
                    <div className="image-box">
                        <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                    </div>
                    <div className="profile-details">
                        <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                        <div className="name-job">
                            <h3 className="name">Khoa tran</h3>
                            <h4 className="job">Student</h4>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>
            <SwiperSlide><div className="card swiper-slide">
                <div className="image-box">
                    <img src="./images/showImg/appDev.jpg" alt="" srcset="" />
                </div>
                <div className="profile-details">
                    <img src="./images/profile/profile1.jpg" alt="" srcset="" />
                    <div className="name-job">
                        <h3 className="name">Khoa tran</h3>
                        <h4 className="job">Student</h4>
                    </div>
                </div>
            </div></SwiperSlide>



        </Swiper>
    )
}

export default CardSlider2
