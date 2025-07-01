import React from 'react';
import loader from '../../assets/loader.json';
import Lottie from 'lottie-react';

const Loading = () => {
    return (
        <div className='min-h-[calc(100vh-382px)] flex items-center justify-center'>
            <div>
                <Lottie animationData={loader} 
                loop={true}
                width={30}
                style={{
                    width: '150px'
                }}
                ></Lottie>
            </div>
        </div>
    );
};

export default Loading;