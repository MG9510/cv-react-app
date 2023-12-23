import React from "react";
import { useSwiper } from "swiper/react";

function SwiperNavBtn() {
    const swiper = useSwiper();

    return (
        <div className='row g-0 swiper-nav-btns'>
            <div className='col-6'>
                <div className='flex-elem'>
                <button class="btn btn-primary" style={{width:"100%", margin:"1%"}} onClick={() => swiper.slidePrev()}>
                    <h6>PREV</h6>
                </button>
                </div>                      
            </div>
            <div className='col-6'>
                <div className='flex-elem'>
                <button class="btn btn-primary" style={{width:"100%", margin:"1%"}} onClick={() => swiper.slideNext()}>
                    <h6>NEXT</h6>
                </button>
                </div>                      
            </div>
        </div>
    )
}

export default SwiperNavBtn; 