import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.css'

function home() {
    return (

        <div className="header-carousel">
            <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            interval="5000"
            isPlaying="True"
            lockOnWindowScroll="True"
            playDirection="forward"
            touchEnabled="True"
            infinite="True"
            isIntrinsicHeight="True"
            className="carousel"
            >
                <div className="slides">
                    <Slider 
                    moveThreshold="0.3"
                    
                    >

                        <Slide index={0}><img src="img/carousel_2.jpg" alt="carousel_image" hasMasterSpinner="True" style={{width:"100%", height:"575px"}} /></Slide>
                        <Slide index={1}><img src="img/carousel_1.jpg" alt="carousel_image"  style={{width:"100%", height:"575px"}} /></Slide>
                        <Slide index={2}><img src="img/carousel_3.jpg" alt="carousel_image"  style={{width:"100%", height:"575px"}} /></Slide>
                        
                    </Slider>
                </div>
                <div className="buttons">
                    <ButtonBack className="prev btn btn-outline-warning my-3 mx-2">Prev</ButtonBack>
                    <ButtonNext className="next btn btn-outline-success my-3 mx-2">Next</ButtonNext>
                </div>
            </CarouselProvider>



            <div className="my-5">
                <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={6}
                interval="5000"
                isPlaying="True"
                lockOnWindowScroll="True"
                playDirection="forward"
                touchEnabled="True"
                infinite="True"
                visibleSlides="3"
                isIntrinsicHeight="True"
                className="carousel"
                >
                    <div className="slides">
                        <Slider 
                        moveThreshold="0.3"
                        
                        >

                            <Slide index={0}><img src="img/carousel_6.jpg" alt="carousel_image" hasMasterSpinner="True" style={{ height:"250px"}} /></Slide>
                            <Slide index={1}><img src="img/carousel_5.jpg" alt="carousel_image"  style={{ height:"250px"}} /></Slide>
                            <Slide index={2}><img src="img/carousel_4.jpg" alt="carousel_image"  style={{ height:"250px"}} /></Slide>
                            <Slide index={0}><img src="img/carousel_3.jpg" alt="carousel_image"  style={{ height:"250px"}} /></Slide>
                            <Slide index={1}><img src="img/carousel_2.jpg" alt="carousel_image"  style={{ height:"250px"}} /></Slide>
                            <Slide index={2}><img src="img/carousel_1.jpg" alt="carousel_image"  style={{ height:"250px"}} /></Slide>
                            
                        </Slider>
                    </div>
                    <div className="buttons">
                        <ButtonBack className="prev btn btn-outline-primary my-3 mx-2">Back</ButtonBack>
                        <ButtonNext className="next btn btn-outline-success my-3 mx-2">Next</ButtonNext>
                    </div>
                    <h6>Dot Indicator buttons can also be used for these sliders.</h6>
                </CarouselProvider>
            </div>
        </div>


    )
}

export default home
