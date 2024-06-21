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

const items = [
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
    {
        labelItem: 'Trả góp 0%',
        imgItem:
            'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/317624/realme-c53-black-thumb-600x600.jpg',
        imgTag: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/ValueIcons/label-moi-ra-mat-fnal.png',
        title: 'realme C53 8GB/256GB',
        price: '4.590.000₫',
        discount: '-4%',
    },
];

const fashSalesItems = [
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    },
    {
        img: 'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/07/27/image-removebg-preview-1.png',
        title:' Vivo Y36 8GB/128GB- chính hãng' ,
        price:'4,690,000₫',
        beforePrice:'5,490,000₫'
    }
]


const cx = classNames.bind(styles);

function Home() {
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

                <FlashSales startTime={startTime} endTime={endTime} items={fashSalesItems}/>

                <Ads
                    img={
                        'https://cdn.hoanghamobile.com/i/home/Uploads/2024/06/05/samsung-s23u-03.jpg'
                    }
                />

                <BoxProduct props={items} />
            </div>
        </div>
    );
}

export default Home;
