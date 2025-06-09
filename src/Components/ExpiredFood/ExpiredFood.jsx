import React, { use } from 'react';
import { AlarmClock, CalendarDays, ClockAlert } from 'lucide-react';
import FoodCard from '../FoodCard/FoodCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const ExpiredFood = ({fetchExpiredFoods}) => {
    const expiredFoods = use(fetchExpiredFoods);
    // Slider
    var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <div className='py-10'>
            <div className='text-center'>
                <h2 className='flex items-center justify-center gap-2 text-primary text-3xl lg:text-5xl font-bold'><ClockAlert size={70} color='#eb0029' />Expired Foods</h2>
                <p className='text-secondary font-medium'>These items have passed their expiry dates. Please dispose of <br /> or check before use.</p>
            </div>

            {/* Slider */}
                <div className="slider-container py-10">
                <Slider {...settings}>
                    {
                    expiredFoods.map(food => ( 
                    <div key={food._id} className='relative p-4'>
                        <FoodCard 
                            food={food}
                        ></FoodCard>
                        <div className="absolute top-10 right-10 badge bg-primary text-white">
                            <CalendarDays size={18} color='white' />
                            Exp: {food.expiryDate.split('T')[0]}
                        </div>
                    </div>
                    ))
                }
                </Slider>
                </div>
        </div>
    );
};

export default ExpiredFood;