import React from 'react';
import './HeaderWeb.css';

export const HeaderWeb = (props) => {
  return (
    <section 
    style={window.outerWidth >= 690 
        ?{  backgroundSize: `${100 + props.scrollPosition*0.15}%`,
            height: `${46.1}vh` 
         }
        :{  backgroundSize: "cover",
            height: `${46.1}vw`
        }} 
    className='banner'
    >
      <div className='glass'></div>
      <div className='logo_container'><img src='https://i.imgur.com/5jlOTx9.png' className='logo_'></img></div>
      <a className='header__button'>Conoce nuestros titulos<span></span></a>    

    </section>
  )
}
