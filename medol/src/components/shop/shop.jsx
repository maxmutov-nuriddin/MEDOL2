import './shop.css'


import { ImCircleRight } from 'react-icons/im'


const Shop = () => {
  return (
    <div >
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
    </div>
  )
}

export default Shop