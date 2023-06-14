import './footer.css'

import location from '../images/logos/logo-loc.svg'
import call from '../images/logos/phone-call.svg'
import Email from '../images/footer/email 1.svg'
import logo from '../images/logo 1.svg'


const Footer = () => {
  return (
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
                <a href='tell' className='footer__list-item'>+998 71 276-62-53 </a><br/>
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
  )
}

export default Footer