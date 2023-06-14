import '../components/navbar.css'


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



import logo from '../images/logo 1.svg'
import location from '../images/logos/logo-loc.svg'
import call from '../images/logos/phone-call.svg'
import search from '../images/logos/search.svg'
import slider from '../images/slide 1.png'
import { AiOutlineCaretDown } from "react-icons/ai";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavLink } from 'react-router-dom';


const navbar = () => {
  return (
    <>
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

    </>
  )
}

export default navbar;