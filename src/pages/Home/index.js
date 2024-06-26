import classNames from 'classnames/bind';

import ImageSlider from '~/components/ImageSlider/ImageSlider';
import slides from '~/data/ImageSlider.json';
import styles from './Home.module.scss';
import Modal from '~/components/Modal';
import Auth from '~/components/Auth';
import useStore from '~/store/hooks';
import Ads from '~/components/Advertisement';
import FlashSales from '~/components/FlashSales';
import BoxProduct from '~/components/BoxProduct';
import { useEffect, useState } from 'react';
import { getAllProductApi } from '~/apiServices/productService';

const fashSalesItems = [
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title: ' Vivo Y36 8GB/128GB- chính hãng',
        price: '4,690,000₫',
        beforePrice: '5,490,000₫',
    },
];

const cx = classNames.bind(styles);

function Home() {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllProductApi();
            setProductData(res);
        };

        fetchData();
    }, []);


    const stateShowForm = useStore()[0];

    let startTime = new Date('June 18, 2024 20:46:50"').getTime();
    let endTime = new Date('June 21, 2024 00:00:00').getTime();

    return (
        <div className={cx('home-page')}>
            <div className={cx('home-page-container')}>
                <ImageSlider data={slides} />
                {stateShowForm.showAuthForm && (
                    <Modal>
                        <Auth />
                    </Modal>
                )}

                <Ads
                    img={
                        'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2024/05/banner/1200x100-1200x100-21.png'
                    }
                />

                <FlashSales startTime={startTime} endTime={endTime} items={fashSalesItems} />

                <Ads
                    img={
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/05/samsung-s23u-03.jpg'
                    }
                />

                <BoxProduct props={productData} />
            </div>
        </div>
    );
}

export default Home;
