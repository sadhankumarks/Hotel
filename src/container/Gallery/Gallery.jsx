import React, {useState,useRef} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from "../../constants";
import { SubHeading } from "../../components";

import './Gallery.css';

const galleryImages =[
  images.gallery01,images.gallery02,images.gallery03,images.gallery04
];

const Gallery = () => {
  const scrollRef =useRef(null);

  const scroll = (dirction) =>{
    const {current} = scrollRef;

    if(dirction === 'left'){
      current.scrollLeft -= 300;
    }
    else{
      current.scrollLeft +=300;
    }
  }
      return(
      <div className='app__gallery flex__center'> 
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color: '#AAA', marginTop:'2rem'}}>Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum. </p>
        <button type="button" className='custom__button'>View More</button>
      </div>
        
      <div className='app__gallery-images'>
       <div className='app__gallery-images_container' ref={scrollRef}> 
       {galleryImages.map((image, idx) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${idx + 1}`}>
            <img src={image} alt='gallery' />
            <BsInstagram className='gallery__image-icon'/>
          </div>
        ))}

       </div>
       <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>
       </div>
      </div>

      </div>
    );
}
export default Gallery;
