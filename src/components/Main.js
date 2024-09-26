import React from 'react';
import journey from '../images/journey.png'

function Main() {
  return (
    <main className="main-content">
    <div className="main-content__container">
        <div className='main-content__left'>
            <div className="main-content__title-container">
            <h1 className="main-content__title">ПУТЕШЕСТВИЕ</h1>
            </div>
            <p className="main-content__subtitle">на красную планету</p>
            <div className="main-content__button-container">
                <button className="main-content__button">Начать путешествие</button>
                <img src={journey} alt="Path to rocket" className="main-content__image" />
            </div>
        </div>
        <div className='main-content__right'>
        <div className="main-content__blocks">
            <div className="main-content__block">
                <p className="main-content__block-title">мы</p>
                <p className="main-content__block-number">1</p>
                <p className="main-content__block-subtitle">на рынке</p>
            </div>
            <div className="main-content__block">
                <p className="main-content__block-title">гарантируем</p>
                <p className="main-content__block-number">50%</p>
                <p className="main-content__block-subtitle">безопасность</p>
            </div>
            <div className="main-content__block">
                <p className="main-content__block-title">календарик за</p>
                <p className="main-content__block-number">2001г.</p>
                <p className="main-content__block-subtitle">в подарок</p>
            </div>
            <div className="main-content__block">
                <p className="main-content__block-title">путешествие</p>
                <p className="main-content__block-number">597</p>
                <p className="main-content__block-subtitle">дней</p>
            </div>
        </div>
    </div>
    </div>
    </main>

  );
}

export default Main;
