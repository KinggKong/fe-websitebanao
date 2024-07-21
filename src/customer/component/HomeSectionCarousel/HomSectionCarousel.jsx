import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel/lib/react-alice-carousel";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import { useState } from "react";


const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0,10).map((item) => <HomeSectionCard product={item}></HomeSectionCard>)
    
    return (
        <div className="relative px-4 lg:px-8">
            <h2 className="text-2xl front-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="relative p-5 border">
                <AliceCarousel
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    infinite
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                    items={items} />
                {activeIndex !== items.length - 5 && <Button
                    variant="contained"
                    className="z-50"
                    onClick={slideNext}
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(50%) rotate(90deg)',
                        bgcolor: "white"
                    }} aria-label="next">
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }}></KeyboardArrowLeftIcon>
                </Button>}

                {activeIndex !== 0 && <Button
                        variant="contained"
                        className="z-50"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: "white"
                        }} aria-label="next">
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }}></KeyboardArrowLeftIcon>
                    </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel;