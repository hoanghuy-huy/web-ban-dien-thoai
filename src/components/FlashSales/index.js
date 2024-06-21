import React from 'react';
import Slider from 'react-slick';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import classNames from 'classnames/bind';


import Header from './Header';

import styles from './FlashSales.scss';
import ProductItemFashSale from './ProductItem';
const cx = classNames.bind(styles);

function FlashSales({props, startTime, endTime, items}) {
    const renderItem = () => (
        items.map((item,index) => (
            <ProductItemFashSale key={index} item={item}/>
        ))
    )

    const PrevArrow = (props) => {
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

    const NextArrow = (props) => {
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


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('flash-sales')}>
            <Header endTime={endTime} startTime={startTime}/>

            <div className={cx('flash-sales-content')}>
                <Slider {...settings}>
                    {renderItem()}
                </Slider>
            </div>
        </div>
    );
}

export default FlashSales;
