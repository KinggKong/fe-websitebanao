import React from 'react'
import { mens_kurta } from '../../../../Data/mens_kurta';
import MainCarousel from '../../HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../HomeSectionCarousel/HomSectionCarousel';

const HomePage = () => {
    return (
        <div>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-20'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}></HomeSectionCarousel>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}></HomeSectionCarousel>
            </div>
        </div>
    )
}

export default HomePage;