import React from 'react';
import {images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () =>{
      return (
      <div className="app__bg app__wrapper section__padding ">
        <div className='app__wrapper_img app__wrapper_img-reverse'>
           <img src={images.chef} alt='Chef img'/>
        </div>

        <div className='app__wrapper_info'>
          <SubHeading title="Chef's Word"/>
          <h1 className='headtext__cormorant'>What We Belive In</h1>

          <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
              <img src={images.quote} alt='quote'/>
              <p className='p__opensans'>Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore  .</p>
            </div>
            <p className='p__opensans'>Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum.</p>
            <div className='app__chef-sign'>
               <p>Kevin Luo</p>
               <p className='p__opensans'>Chef & Founder</p>
               <img src={images.sign} alt='sign'/>
            </div>
          </div>
        </div>
        
      </div>
       );
  }
export default Chef;
