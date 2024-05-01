import React from 'react'
import GroupComponent from '../ui/group'
import group1 from "../../public/images/group1.png"
import group2 from "../../public/images/group2.png"
import group3 from "../../public/images/group3.png"
import { Swiper, SwiperSlide } from "swiper/react";


function Groups() {
    return (
        <div className='mt-12'>
            <h1 className='title-text mb-6 text-center md:text-left'>
                Trending Groups
            </h1>
            <Swiper
                // spaceBetween={50}
                slidesPerView={1}
                slidesPerGroup={2}
          loop={true}

                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex justify-center p-2 md:block md:flex-row gap-10 mySwiper '
            >
                <SwiperSlide>
                    <GroupComponent image={group1.src} title="Trekking Union" members='133k' />
                </SwiperSlide>
                <SwiperSlide>
                    <GroupComponent image={group3.src} title="Memories" members='94k' />
                </SwiperSlide>
                <SwiperSlide>
                    <GroupComponent image={group2.src} title="Scenario Photography" members='127k' />
                </SwiperSlide>
            </Swiper>

        </div>

    )
}

export default Groups
