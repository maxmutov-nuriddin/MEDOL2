
import Aes from '../../images/logo/aesculap-b-braun1 1.png';
import Asp from '../../images/logo/asp1 1.png';
import Bd from '../../images/logo/bd1 1.png';
import Biosense1 from '../../images/logo/biosense1 1.png';
import Cordis from '../../images/logo/cordis1 1.png';
import Depuy from '../../images/logo/depuy-synthes-spine-jandj(1) 1.png';
import Enthicon from '../../images/logo/eth 1.png';
import Enthi from '../../images/logo/ethicon-endo-surgery1 1.png';
import imags from '../../images/about/Ellipse 4.svg'
import ImgsTwo from '../../images/about/Ellipse 5.svg'
import ImageThree from '../../images/about/Ellipse 6.svg'
import Logos from '../../images/about/logo 2.svg'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import './about.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const About = () => {
  return (
    <div>
      <div className='container'>
        <h2 className="shop__title text-center my-5">
          ПАРТНЕРЫ
        </h2>
        <div className='about__inner d-flex justify-content-between align-items-center my-5'>
          <div className='about__img'>
            <img className='about__img1' src={imags}/>
            <img className='about__img2' src={ImgsTwo}/>
            <img className='about__img3' src={ImageThree}/>
            <img className='about__img4' src={Logos}/>
          </div>
          <div className='ms-5 '>
            <p className='about__text mb-5' >
              Группа компаний MEDOL создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services. Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан.
            </p>
            <a className='about__link'>
              Узнать больше
            </a>
          </div>
        </div>

        <Swiper className='my-5'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className="d-flex row text-center">
              <div className="card-bodies col-3">
                <img src={Aes} />
              </div>
              <div className="card-bodies col-3">
                <img src={Asp} />
              </div>
              <div className="card-bodies col-3">
                <img src={Bd} />
              </div>
              <div className="card-bodies col-3">
                <img src={Biosense1} />
              </div>
              <div className="card-bodies col-3">
                <img src={Cordis} />
              </div>
              <div className="card-bodies col-3">
                <img src={Depuy} />
              </div>
              <div className="card-bodies col-3">
                <img src={Enthicon} />
              </div>
              <div className="card-bodies col-3">
                <img src={Enthi} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>      <div className="d-flex row text-center">
            <div className="card-bodies col-3">
              <img src={Aes} />
            </div>
            <div className="card-bodies col-3">
              <img src={Asp} />
            </div>
            <div className="card-bodies col-3">
              <img src={Bd} />
            </div>
            <div className="card-bodies col-3">
              <img src={Biosense1} />
            </div>
            <div className="card-bodies col-3">
              <img src={Cordis} />
            </div>
            <div className="card-bodies col-3">
              <img src={Depuy} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthicon} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthi} />
            </div>
          </div></SwiperSlide>
          <SwiperSlide>      <div className="d-flex row text-center">
            <div className="card-bodies col-3">
              <img src={Aes} />
            </div>
            <div className="card-bodies col-3">
              <img src={Asp} />
            </div>
            <div className="card-bodies col-3">
              <img src={Bd} />
            </div>
            <div className="card-bodies col-3">
              <img src={Biosense1} />
            </div>
            <div className="card-bodies col-3">
              <img src={Cordis} />
            </div>
            <div className="card-bodies col-3">
              <img src={Depuy} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthicon} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthi} />
            </div>
          </div></SwiperSlide>
          <SwiperSlide>      <div className="d-flex row text-center">
            <div className="card-bodies col-3">
              <img src={Aes} />
            </div>
            <div className="card-bodies col-3">
              <img src={Asp} />
            </div>
            <div className="card-bodies col-3">
              <img src={Bd} />
            </div>
            <div className="card-bodies col-3">
              <img src={Biosense1} />
            </div>
            <div className="card-bodies col-3">
              <img src={Cordis} />
            </div>
            <div className="card-bodies col-3">
              <img src={Depuy} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthicon} />
            </div>
            <div className="card-bodies col-3">
              <img src={Enthi} />
            </div>
          </div></SwiperSlide>
        </Swiper>

      </div>

    </div>
  )
}

export default About