import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import AliceCarousel from 'react-alice-carousel';



const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img className='cursor-pointer '
        role='presentation' src={item.image} alt=''></img>)

    return (
        <div>
            <AliceCarousel
                autoPlayInterval={1000}
                autoPlay
                disableButtonsControls
                infinite
                items={items} />
        </div>

    )
}

export default MainCarousel;