import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

const ImageCarousel = () => {
    return (
        <Carousel fade id="carouselFade" className="carousel-fade">
            <Carousel.Indicators>
                <Carousel.Indicator data-bs-target="#carouselFade" data-bs-slide-to="0" active={true} />
                <Carousel.Indicator data-bs-target="#carouselFade" data-bs-slide-to="1" />
                <Carousel.Indicator data-bs-target="#carouselFade" data-bs-slide-to="2" />
                <Carousel.Indicator data-bs-target="#carouselFade" data-bs-slide-to="3" />
                <Carousel.Indicator data-bs-target="#carouselFade" data-bs-slide-to="4" />
            </Carousel.Indicators>
            <Carousel.Inner>
                <Carousel.Item>
                    <Image src="../imgs/cont1.jpg" className="d-block w-100 carousel__img" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="../imgs/cont2.jpg" className="d-block w-100 carousel__img" alt="Slide 2" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="../imgs/cont3.jpg" className="d-block w-100 carousel__img" alt="Slide 3" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="../imgs/cont4.jpg" className="d-block w-100 carousel__img" alt="Slide 4" />
                </Carousel.Item>
                <Carousel.Item>
                    <Image src="../imgs/cont5.jpg" className="d-block w-100 carousel__img" alt="Slide 5" />
                </Carousel.Item>
            </Carousel.Inner>
            <Carousel.Prev data-bs-target="#carouselFade" data-bs-slide="prev">
                <Button className="carousel-control-prev" variant="light">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </Button>
            </Carousel.Prev>
            <Carousel.Next data-bs-target="#carouselFade" data-bs-slide="next">
                <Button className="carousel-control-next" variant="light">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </Button>
            </Carousel.Next>
        </Carousel>
    );
}

export default ImageCarousel;
