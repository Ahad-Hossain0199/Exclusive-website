import React from 'react'
import SecHead from './SecHead'
import CountDown from './CountDown'
import Card from './Card'

import gamepad from '../assets/gamepad.png';
import keyboard from '../assets/keyboard.png';
import monitor from '../assets/monitor.png';
import chair from '../assets/chair.png';
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';


const FlashSales = () => {
  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <>
      <section className='mt-30.5'>
        <div className="container">
          <div className='flex items-end gap-22'>
            <SecHead
              subtitle="Today’s"
              title="Flash Sales"
            />
            <CountDown />
          </div>
          <div className='mt-10 relative'>

            <Slider {...settings}>

              <div>
                <Card
                  image={gamepad}
                  title="HAVIT HV-G92 Gamepad"
                  currentPrice="120"
                  previousPrice="160"
                  review="88"
                  discount="40"
                />
              </div>
              <div>
                <Card
                  image={monitor}
                  title="AK-900 Wired Keyboard"
                  currentPrice="960"
                  previousPrice="1160"
                  review="75"
                  discount="35%"
                />
              </div>
              <div>
                <Card
                  image={keyboard}
                  title="IPS LCD Gaming Monitor"
                  currentPrice="370"
                  previousPrice="400"
                  review="99"
                  discount="30%"
                />
              </div>
              <div><Card
                image={chair}
                title="S-Series Comfort Chair"
                currentPrice="375"
                previousPrice="400"
                review="99"
                discount="25%"
              /></div>
              <div>
                <Card
                  image={gamepad}
                  title="HAVIT HV-G92 Gamepad"
                  currentPrice="120"
                  previousPrice="160"
                  review="88"
                  discount="40%"
                />
              </div>

              <div>
                <Card
                  image={monitor}
                  title="AK-900 Wired Keyboard"
                  currentPrice="960"
                  previousPrice="1160"
                  review="75"
                  discount="35%"
                />
              </div>
            </Slider>
          </div>
          <Button className='mx-auto block mt-12.75'>View All Products</Button>
          <hr className='border border-secondary/20 mt-15' />
        </div>
      </section>

    </>
  )
}

export default FlashSales
