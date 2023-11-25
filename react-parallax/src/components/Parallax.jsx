import React from 'react';
import '../styles.css';
import Plx from 'react-plx';

import image2 from '../Assets/image2.jpg';
import image1 from '../Assets/image1.jpg';
import image3 from '../Assets/image3.jpg';

const Parallax = () => {
  return (
    <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 700,
            easing: 'ease-in',
            properties: [
              {
                startValue: 1,
                endValue: 1.6,
                property: 'scale',
              },
              {
                startValue: 0,
                endValue: 360,
                property: 'rotate',
              },
            ],
          },
        ]}
        className="fixed left-0 top-0 w-full  h-screen "
      >
        <img
          className='w-20 h-20 object-cover '
          src={image2}
          alt="foreground"
        />
       
      </Plx>
      
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: 'scale',
              },
            ],
          },
        ]}
        className="w-full h-full"
      >
        <img
          style={{ width: '100%', filter: 'brightness(0.8)' }}
          src={image3}
          alt="background"
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: 'scale',
              },
            ],
          },
        ]}
        className="w-full h-full"
      >
        <img
          style={{ width: '100%', filter: 'brightness(0.8)' }}
          src={image2}
          alt="background"
        />
      </Plx>

     
    </div>
  );
};

export default Parallax;




