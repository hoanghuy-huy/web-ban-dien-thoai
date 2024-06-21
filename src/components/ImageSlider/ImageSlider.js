import classNames from 'classnames/bind';

import styles from './ImageSlider.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

const cx = classNames.bind(styles);


const ImageSlider = ({ data, props }) => {

    
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={cx('custom-arrow', 'custom-prev-arrow')}
                onClick={onClick}
            >
                <BsArrowLeftCircleFill className={cx('arrow arrow-left')} />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className={cx('custom-arrow' , 'custom-next-arrow')}
                onClick={onClick}
            >
                <BsArrowRightCircleFill className={cx('arrow arrow-right')} />
            </div>
        );
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <section>
            <div className={cx('container-image-slider-top')}>
                <div className={cx('container-img-slider')}>
                    <div className={cx('image-slider')}>
                        <Slider {...settings}>
                            {data.slides.map((item, index) => (
                                <img
                                    src={item.src}
                                    key={index}
                                    alt={item.alt}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
