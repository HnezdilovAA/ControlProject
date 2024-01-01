import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css'
import './Slider.css'

type Props = {}
const Slider = (props: Props) => {
    return (
        <div>
            {' '}
            <h3>Top Destinations</h3>
            <p>
                Tick one more destination off of your bucket list with one of
                our most popular vacations in 2022
            </p>
            <Swiper
                className="SwiperWraper"
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={() => console.log('swiper')}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    {' '}
                    <img src="./images/SliderPhoto/SliderPhoto2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="SwiperWraperItem">
                    <img src="./images/SliderPhoto/SliderPhoto9.jpg" alt="" />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}
export default Slider
