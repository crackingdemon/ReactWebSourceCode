import React from 'react';
import './Card.css';
import maumau from "./images/maumau.jpg";
import saap from "./images/saap.jpg";
import piku from "./images/piku.jpg";
import monkey from "./images/monkey.jpg";
import yoda from "./images/yoda.png";

import CardItem from './CardItem';

const Card =() => {
    return(
        <>
    <div className='cards'>
      <h1>Our Blogs</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={yoda}
              text='Baby yoda'
              label='Love'
            //   path='/yours'
            />
            <CardItem
              src={piku}
              text='Pikachu'
              label='Love'
            //   path='/yours'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={maumau}
              text='Mau Mau bilau'
              label='Love'
            //   path='/Yours'
            />
            <CardItem
              src={saap}
              text='Snake'
              label='Ex'
            //   path='/Yours'
            />
            <CardItem
              src={monkey}
              text='Monkey'
              label='Love'
            //   path='/yours'
            />
          </ul>
        </div>
      </div>
    </div>
        </>
    )
};
export default Card;
