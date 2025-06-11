import { AlarmClock } from 'lucide-react';
import FoodCard from '../FoodCard/FoodCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from 'framer-motion';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const NearlyExpiryItems = ({expiringSoon}) => {
    const expiringFood = expiringSoon;

    // Slider
      var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
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
        <div className='pb-10'>
            <div className='text-center mb-6'>
                <h2 className='flex items-center justify-center gap-2 text-3xl lg:text-5xl font-bold'><AlarmClock size={80} color='#eb0029' /> Nearly Expiring Items</h2>
                <p className='text-secondary font-medium'>Don't let them go to waste!</p>
            </div>

            {/* Slider */}
                <div className="slider-container bg-white py-10 lg:p-10 rounded-2xl">
                <Slider {...settings}>
                    {
                    expiringFood.map((food, index) => ( 
                    <motion.div 
                    key={food._id} 
                    initial = {{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className='p-4'>
                        <FoodCard 
                            food={food}
                        ></FoodCard>
                    </motion.div>
                    ))
                }
                </Slider>
                </div>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    expiringFood.map(food => <FoodCard
                        key={food._id} 
                        food={food}
                    ></FoodCard>)
                }
            </div> */}

        </div>
    );
};

export default NearlyExpiryItems;