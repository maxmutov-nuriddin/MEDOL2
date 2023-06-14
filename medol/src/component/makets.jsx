import './makets.css'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import logo from '../images/logo 1.svg'
import location from '../images/logos/logo-loc.svg'
import call from '../images/logos/phone-call.svg'
import search from '../images/logos/search.svg'
import slider from '../images/slide 1.png'
import Email from '../images/footer/email 1.svg'

import { AiOutlineCaretDown } from "react-icons/ai";
import { ImCircleRight } from 'react-icons/im'

import Imgfour from '../images/news/20180420_101750 1.png'
import Aes from '../images/logo/aesculap-b-braun1 1.png';
import Asp from '../images/logo/asp1 1.png';
import Bd from '../images/logo/bd1 1.png';
import Biosense1 from '../images/logo/biosense1 1.png';
import Cordis from '../images/logo/cordis1 1.png';
import Depuy from '../images/logo/depuy-synthes-spine-jandj(1) 1.png';
import Enthicon from '../images/logo/eth 1.png';
import Enthi from '../images/logo/ethicon-endo-surgery1 1.png';
import imags from '../images/about/Ellipse 4.svg'
import ImgsTwo from '../images/about/Ellipse 5.svg'
import ImageThree from '../images/about/Ellipse 6.svg'
import Logos from '../images/about/logo 2.svg'
import Img from '../images/servic/servic 1.png'
import Imgs from '../images/servic/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png'
import Image from '../images/servic/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';

const Makets = () => {
  return (
    <div>
      <div className='bg-img'>
        <div className="navbar d-flex align-items-center">
          <ul className="d-flex justify-content-between nav__list">
            <li className='d-flex me-5 align-items-center nav__list-item hover '>
              <span className='px-2 py-2 rounded-circle bg-body-emphasis me-2'>
                <img src={location} />
              </span>
              <a href='address ' className='nav__list-item'>
                г.Ташкент, Чиланзар <br />
                10 квартал, дом 3/1
              </a>
            </li>
            <li className='d-flex align-items-center nav__list-item hover '>
              <span className='px-2 py-2 rounded-circle bg-body-emphasis me-2'>
                <img src={call} />
              </span>
              <a href='tell' className='nav__list-item'>+998 71 276-62-53 <br />+998 71 276-62-54</a>
            </li>
          </ul>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <ul className="d-flex justify-content-between align-items-center">
            <li className='me-5 px-2 py-2 rounded-circle bg-body-emphasis nav__list-item'>
              <button className='border-0 bg-light' onClick={() => {
                const search = document.querySelector('.search__close');
                search.classList.toggle('search__open');
              }}>
                <img src={search} alt='logo' />
              </button>
              <div className='search__close '>
                <form id="search-form">
                  <input id="search-input" className=' search__input' type='text' placeholder='search' />
                  <button type='submit' className='border-0 buttons' form="search-form">
                    <img src={search} width='23px' height='23px' alt='logo' />
                  </button>
                </form>
              </div>
            </li>
            <li className=' hover face px-2 py-2 rounded-pill bg-body-emphasis me-5 nav__list-item'>
              <a href='https:facebook.com' className='nav__list-item'>
                Мы на Facebook
              </a>
            </li>
            <button className=" hover btn flag px-2 py-2 rounded-pill nav__list-item" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => {
              const dropdown = document.querySelector('.dropdown-menu');
              dropdown.classList.toggle('dropdown-menu2');
            }}>
              Русский {<AiOutlineCaretDown />}
            </button>
            <ul className="dropdown-menu text-center">
              <li><a className="dropdown-items hover" href="#">Русский</a></li>
              <li><a className="dropdown-items hover" href="#">English</a></li>
            </ul>
          </ul>
        </div>

        <div className='my-5'>
          <ol className='items d-flex justify-content-between px-5 bg-body-emphasis'>
            <li className='list '><NavLink to='/Shop' className='list__link hover'>МАГАЗИН</NavLink></li>
            <li className='list '><NavLink to='/About' className='list__link hover'>О КОМПАНИИ</NavLink></li>
            <li className='list '><NavLink to='/Products' className='list__link hover'>ПРОДУКЦИЯ</NavLink></li>
            <li className='list '><NavLink to='/Servic' className='list__link hover'>УСЛУГИ</NavLink></li>
            <li className='list '><NavLink to='/News' className='list__link hover'>АКЦИИ И НОВОСТИ</NavLink></li>
            <li className='list '><NavLink to='/Tell' className='list__link hover'>ОБРАТНАЯ СВЯЗЬ</NavLink></li>
          </ol>
        </div>

        <div className='container'>
          <h1 className='visually-hidden'>There is not</h1>
          <Swiper
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
              <div className='d-flex align-items-center'>
                <div className='header__hero'>
                  <h2 className='header__hero-title'>
                    Анализатор
                    ABL800 FLEX
                  </h2>
                  <p className='header__hero-text my-4'>
                    Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
                  </p>
                  <a className='header__hero-link px-5 py-2' href='#'>
                    Подробнее
                  </a>
                </div>
                <div>
                  <img src={slider} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>         <div className='d-flex align-items-center'>
              <div className='header__hero'>
                <h2 className='header__hero-title'>
                  Анализатор
                  ABL800 FLEX
                </h2>
                <p className='header__hero-text my-4'>
                  Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
                </p>
                <a className='header__hero-link px-5 py-2' href='#'>
                  Подробнее
                </a>
              </div>
              <div>
                <img src={slider} />
              </div>
            </div></SwiperSlide>
            <SwiperSlide>         <div className='d-flex align-items-center'>
              <div className='header__hero'>
                <h2 className='header__hero-title'>
                  Анализатор
                  ABL800 FLEX
                </h2>
                <p className='header__hero-text my-4'>
                  Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
                </p>
                <a className='header__hero-link px-5 py-2' href='#'>
                  Подробнее
                </a>
              </div>
              <div>
                <img src={slider} />
              </div>
            </div></SwiperSlide>
            <SwiperSlide>         <div className='d-flex align-items-center'>
              <div className='header__hero'>
                <h2 className='header__hero-title'>
                  Анализатор
                  ABL800 FLEX
                </h2>
                <p className='header__hero-text my-4'>
                  Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии
                </p>
                <a className='header__hero-link hover__link px-5 py-2' href='#'>
                  Подробнее
                </a>
              </div>
              <div>
                <img src={slider} />
              </div>
            </div></SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <h2 className="shop__title text-center my-5">
          ПРОДУКЦИЯ
        </h2>
        <div className="shop d-flex row text-center justify-content-center gap-5">
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles img2 mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles img3 mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles img4 mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles img5 mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
          <div className="shop__card col-3 px-3 py-3 ">
            <h3 className='shop__titles img6 mb-4'>
              Эндоваскулярная <br />
              хирургия
            </h3>
            <a className="header__hero-link header__hero-link px-4 py-2" href="#">Посмотреть все</a>
          </div>
        </div>
        <div className='text-center my-5'>
          <a href='#' className="shop__text hover" >
            Перейти в каталог нашей продукции <ImCircleRight />
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="servic__title text-center my-5">
          УСЛУГИ
        </h2>
        <div className='d-flex justify-content-between servic__bg'>
          <div className="card w-25 mb-5 text-center">
            <img className='card__img' src={Img} />
            <div className="card-body"></div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="header__hero-link header__hero-link text-center servic__link ">Подробнее</a>
          </div>
          <div className="card w-25 mb-5 text-center">
            <img className='card__img' src={Imgs} />
            <div className="card-body"></div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="header__hero-link header__hero-link text-center servic__link ">Подробнее</a>
          </div>
          <div className="card w-25 mb-5 text-center">
            <img className='card__img' src={Image} />
            <div className="card-body"></div>
            <h5 className="card-title">Card title</h5>
            <p className="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
            <a href="#" className="header__hero-link header__hero-link text-center servic__link ">Подробнее</a>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2 className="shop__title text-center my-5">
          О КОМПАНИИ
        </h2>
        <div className='about__inner d-flex justify-content-between align-items-center my-5'>
          <div className='about__img'>
            <img className='about__img1' src={imags} />
            <img className='about__img2' src={ImgsTwo} />
            <img className='about__img3' src={ImageThree} />
            <img className='about__img4' src={Logos} />
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
      </div>
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
      <div className='container'>
        <div className='my-5'>
          <h2 className="shop__title text-center my-5">
            ПАРТНЕРЫ
          </h2>
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
      <div className='footer__bg py-3'>
        <div className='d-flex flex-row justify-content-center my-5'>
          <div>
            <div className='d-flex flex-row mb-5'>
              <strong className='footer__strong'>Контакты</strong>
              <ul className='d-flex row' >
                <li className='col-6'>
                  <span className='px-2 py-2 rounded-circle bg-body-emphasis me-2'>
                    <img src={location} />
                  </span>
                  <a href='address ' className='footer__list-item'>
                    г.Ташкент, Чиланзар <br />
                    10 квартал, дом 3/1
                  </a>
                </li>
                <li className='col-6'>
                  <span className='px-2 py-2 rounded-circle bg-body-emphasis me-2'>
                    <img src={call} />
                  </span>
                  <a href='tell' className='footer__list-item'>+998 71 276-62-53 </a><br />
                  <a href='tell' className='footer__list-item ms-5'>+998 71 276-62-54 </a>
                </li>
                <li className='col-6 mt-4'>
                  <span className='px-2 py-2 rounded-circle bg-body-emphasis me-2'>
                    <img src={Email} />
                  </span>
                  <a href='address ' className='footer__list-item'>
                    info@medol.uz
                  </a>
                </li>
                <li className='col-6 mt-4'>
                  <a href='#' className='footer__list-link'>
                    Оставить заявку
                  </a>
                </li>
              </ul>
            </div>
            <div className='d-flex flex-row align-items-center'>
              <img src={logo} />
              <p className='ms-3 footer__full-text'>
                Наша цель – построить прозрачный, <br /> долгосрочный бизнес, приносить огромную <br /> пользу населению, путем решения глобальных <br /> вопросов. Внедряя инновационные технологии <br /> на рынок Узбекистана.
              </p>
            </div>
          </div>
          <div className='d-flex flex-row'>
            <ul>
              <li className='footer__item-list'><strong>О компании
              </strong></li>
              <li className='footer__item-list'>История</li>
              <li className='footer__item-list'>Партнеры</li>
              <li className='footer__item-list'>Вакансии
              </li>
            </ul>
            <ul className='mx-4'>
              <li className='footer__item-list'><strong>Продукция</strong></li>
              <li className='footer__item-list'>
                Эндоваскулярная хирургия
              </li>
              <li className='footer__item-list'>
                Аритмология
              </li>
              <li className='footer__item-list'>
                Кардиохирургия
              </li>
              <li className='footer__item-list'>
                Лабораторная диагностика
              </li>
              <li className='footer__item-list'>
                Хирургия
              </li>
              <li className='footer__item-list'>
                Эндоурология
              </li>
              <li className='footer__item-list'>
                Нейрохирургия
              </li>
              <li className='footer__item-list'>
                Анестезиология и реанимация
              </li>
              <li className='footer__item-list'>
                Диабет
              </li>
            </ul>
            <ul>
              <li className='footer__item-list'><strong>Услуги</strong></li>
              <li className='footer__item-list'>Сервис</li>
              <li className='footer__item-list'>Регистрации</li>
              <li className='footer__item-list'>Услуги логистики</li>
            </ul>
          </div>
        </div>
        <div className='d-flex justify-content-between my-5'>
          <p>
            © 2021 ООО «Medical Online Services»
          </p>
          <p>
            Дизайн сделан:
            <a href='address ' className='footer__list-item'>
              damingues92@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Makets