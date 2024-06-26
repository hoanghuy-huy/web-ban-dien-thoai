import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import { useState, useEffect } from 'react';
import { getOneProductApi } from '~/apiServices/productService';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const productItem = [
    {
        id: 273947792,
        name: 'Điện thoại AI Samsung Galaxy S24 Ultra, Camera 200MP Zoom 100x, S Pen - Hàng Chính Hãng',
        originalPrice: 34490000,
        price: 24990000,
        discountRate: 28,
        configurableProduct: [
            {
                id: 273947991,
                name: 'Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Đen- Hàng Chính Hãng',
                color: 'Đen',
                price: 24990000,
                selected: true,
                thumbnailUrl:
                    'https://salt.tikicdn.com/cache/280x280/ts/product/5b/7f/3e/473fe832294c81611e57ae77101e2f71.jpg',
            },
            {
                id: 273947988,
                name: 'Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Xám- Hàng Chính Hãng',
                color: 'Xám',
                price: 24990000,
                selected: false,
                thumbnailUrl:
                    'https://salt.tikicdn.com/cache/280x280/ts/product/2c/97/51/72a1b0d191851e292326a228065200b2.jpg',
            },
            {
                id: 273947994,
                name: 'Điện thoại AI Samsung Galaxy S24 Ultra 12GB/256GB, Camera 200MP Zoom 100x, S Pen- Tím- Hàng Chính Hãng',
                color: 'Tím',
                price: 25990000,
                selected: false,
                thumbnailUrl:
                    'https://salt.tikicdn.com/cache/280x280/ts/product/ca/e3/2b/68f2b0cd84cca8b2f7e4f57124076b15.jpg',
            },
        ],
    },
];

function ProductDetail() {
    const idProduct = useParams();
    const [productData, setProductData] = useState();
    const [activeItem, setActiveItem] = useState(1);
    const [img, setImg] = useState([
        productItem[0].configurableProduct[0].thumbnailUrl,
        productItem[0].configurableProduct[0].color,
    ]);
    const [price, setPrice] = useState(productItem[0].configurableProduct[0].price);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(productItem[0].configurableProduct[0].price);


    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async (idProduct) => {
            const res = await getOneProductApi(idProduct);
            
            setProductData(res);
        };
        

        fetchData(idProduct.productId);
        console.log(idProduct.productId)
    }, []);
    


    const handleOnClickSelected = (item) => {
        setTotalPrice(item.price);
        setActiveItem(item.id);
        setImg([item.thumbnailUrl, item.color]);
        setPrice(item.price);
        setTotalPrice(quantity * item.price);
    };

    const handleOnChangeQuantity = (e) => {};

    const handleResolveItem = (price, quantity) => {
        setQuantity(quantity);
        setTotalPrice(quantity * price);
    };

    return (
    
        <div className={cx('container')}>
            <div className={cx('product-detail')}>
                {productItem.map((item, index) => {
                    return (
                        <div key={index} className={cx('product-details-container')}>
                            <div className={cx('product-image')}>
                                <div className={cx('product-image-frame')}>
                                    <img src={img[0]} alt="item" />
                                </div>
                            </div>
                            <div className={cx('product-center')}>
                                <div className={cx('product-info')}>
                                    <div className={cx('top-product')}>
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className={cx('product-price')}>
                                        <strong>
                                            {price.toLocaleString('vi-VN', {
                                                maximumFractionDigits: 0,
                                            })}
                                        </strong>
                                        <sup>₫</sup>
                                        <div className={cx('product-price__discount-rate')}>
                                            -{item.discountRate}%
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('product-options')}>
                                    <p className={cx('option-name')}>Màu</p>
                                    <div className={cx('option-list-wrapper')}>
                                        {item.configurableProduct.map((optionItem, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    onClick={() =>
                                                        handleOnClickSelected(optionItem)
                                                    }
                                                    className={cx('option-item', {
                                                        'selected-item':
                                                            activeItem === optionItem.id
                                                                ? true
                                                                : false,
                                                    })}
                                                    id={item.id}
                                                >
                                                    <img
                                                        className={cx('selected-indicator')}
                                                        src="https://salt.tikicdn.com/ts/upload/6d/62/b9/ac9f3bebb724a308d710c0a605fe057d.png"
                                                        alt="Selected"
                                                    />
                                                    <div className={cx('item')}>
                                                        <img
                                                            className={cx('item-img')}
                                                            src={optionItem.thumbnailUrl}
                                                            alt="productImage"
                                                        />
                                                        <span>{optionItem.color}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className={cx('product-buy-box')}>
                                <div className={cx('product-buy-box-container')}>
                                    <div className={cx('product-buy-box__header')}>
                                        <div className={cx('item')}>
                                            <img
                                                className={cx('item-img')}
                                                src={img[0]}
                                                alt="item"
                                            />
                                            <span>{img[1]}</span>
                                        </div>
                                    </div>
                                    <div className={cx('product-buy-box__quantity')}>
                                        <p className={cx('label')}>Số Lượng</p>
                                        <div className={cx('group-input')}>
                                            <button
                                                onClick={() =>
                                                    handleResolveItem(price, quantity - 1)
                                                }
                                                className={cx({
                                                    disable: quantity === 1,
                                                })}
                                            >
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                                                    alt="remove-icon"
                                                />
                                            </button>
                                            <input
                                                type="text"
                                                className={cx('input')}
                                                value={quantity}
                                                onChange={(e) => handleOnChangeQuantity(e)}
                                            />
                                            <button
                                                onClick={() =>
                                                    handleResolveItem(price, quantity + 1)
                                                }
                                            >
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                                                    alt="add-icon"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('product-buy-box__price')}>
                                        <div className={cx('pricelabelstyled')}>Tạm tính</div>
                                        <div className={cx('pricestyled')}>
                                            <div>
                                                {totalPrice.toLocaleString('vi-VN', {
                                                    maximumFractionDigits: 0,
                                                })}
                                                <sup>₫</sup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('group-button')}>
                                        <button className={cx('primary')}>
                                            <span>Mua ngay</span>
                                        </button>
                                        <button
                                            type="button"
                                            data-view-id="pdp_add_to_cart_button"
                                            className={cx('nomal')}
                                        >
                                            Thêm vào giỏ
                                        </button>
                                        <button type="button" className={cx('nomal')}>
                                            <div>Mua trả góp - trả sau</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductDetail;
