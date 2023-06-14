import './news.css'

import Imgfour from '../../images/news/20180420_101750 1.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ImCircleRight } from 'react-icons/im'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const News = () => {
  return (
    <div>
      <div className="container">
        <h2 className="news__title text-center my-5">
          НОВОСТИ
        </h2>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><div className="news__card mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
          <SwiperSlide><div className="news__card  mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
          <SwiperSlide><div className="news__card  mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
          <SwiperSlide><div className="news__card  mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
          <SwiperSlide><div className="news__card  mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
          <SwiperSlide><div className="news__card  mb-5 text-center">
            <img className='news__card-img' src={Imgfour} />
            <h5 className="news__card-title mb-4"><a className='news__card-link' href='#'>Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a></h5>
            <a className="news__card-time" href="time">26.07.2021</a>
            <p className="news__card-text mb-5 mt-3">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
            <a href="#" className="news__card-links text-center">Подробнее</a>
          </div></SwiperSlide>
        </Swiper>
        <div className='text-center my-5 d-flex justify-content-around'>
          <a href='#' className="shop__text hover" >
            Посмотреть все новости  <ImCircleRight />
          </a>
          <a href='#' className="shop__text hover" >
            Подписаться на новости  <ImCircleRight />
          </a>
        </div>
      </div>
    </div>
  )
}

export default News