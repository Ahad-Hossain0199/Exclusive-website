import React from 'react'
import SecHead from './SecHead'
import Card from './Card'
import dog_food_1 from '../assets/dog_food_1.png';
import DSLR_camera_2 from '../assets/DSLR_camera_2.png';
import laptop_3 from '../assets/laptop_3.png';
import product_4 from '../assets/product_4.png';
import car_5 from '../assets/car_5.png';
import cleates_6 from '../assets/cleates_6.png';
import gamepad_7 from '../assets/gamepad_7.png';
import jacket_8 from '../assets/jacket_8.png';


import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow';
import SamplePrevArrow from './SamplePrevArrow';


const OurProducts = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        rows: 2,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <>
            <section className='mt-15'>
                <div className="container">
                    <div>
                        <SecHead
                            subtitle="Our Products"
                            title="Explore Our Products"
                        />
                    </div>
                    <div className='relative mt-15 '>
                        <Slider {...settings} >
                            <Card
                                image={dog_food_1}
                                title="Breed Dry Dog Food"
                                currentPrice="100"
                                review="35"
                            />
                            <Card
                                image={DSLR_camera_2}
                                title="CANON EOS DSLR Camera"
                                currentPrice="360"
                                review="95"
                            />
                            <Card
                                image={laptop_3}
                                title="ASUS FHD Gaming Laptop"
                                currentPrice="700"
                                review="325"
                            />
                            <Card
                                image={product_4}
                                title="Curology Product Set "
                                currentPrice="500"
                                review="145"
                            />

                            <Card
                                image={car_5}
                                title="Kids Electric Car"
                                currentPrice="960"
                                review="65"
                            />
                            <Card
                                image={cleates_6}
                                title="Jr. Zoom Soccer Cleats"
                                currentPrice="1160"
                                review="55"
                            />

                            <Card
                                image={gamepad_7}
                                title="Quilted Satin Jacket"
                                currentPrice="660"
                                review="55"
                            />
                            <Card
                                image={jacket_8}
                                title="Breed Dry Dog Food"
                                currentPrice="660"
                                review="35"
                            />
                            <Card
                                image={dog_food_1}
                                title="Breed Dry Dog Food"
                                currentPrice="100"
                                review="35"
                            />
                            <Card
                                image={DSLR_camera_2}
                                title="CANON EOS DSLR Camera"
                                currentPrice="360"
                                review="95"
                            />
                            <Card
                                image={laptop_3}
                                title="ASUS FHD Gaming Laptop"
                                currentPrice="700"
                                review="325"
                            />
                            <Card
                                image={product_4}
                                title="Curology Product Set "
                                currentPrice="500"
                                review="145"
                            />

                            <Card
                                image={car_5}
                                title="Kids Electric Car"
                                currentPrice="960"
                                review="65"
                            />
                            <Card
                                image={cleates_6}
                                title="Jr. Zoom Soccer Cleats"
                                currentPrice="1160"
                                review="55"
                            />
                        </Slider>
                    </div>

                    <Button className="mx-auto block mt-15">View All Products</Button>
                </div>
            </section>

        </>
    )
}

export default OurProducts
