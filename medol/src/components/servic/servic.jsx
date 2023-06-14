
import './servic.css'

import Img from '../../images/servic/servic 1.png'
import Imgs from '../../images/servic/IIM-CAT-2020-application-deadline-extended-here’s-all-you-need-to-know 1.png'
import Image from '../../images/servic/man-by-truck-guy-delivery-uniform-man-with-clipboard 1.png'




const Servic = () => {
  return (
    <div>
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
    </div>
  )
}

export default Servic