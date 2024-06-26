import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ item }) {
    const id = item.id;

    const path = `/product-detail/${id}`;

    return (
        <li className={cx('item')}>
            <Link to={path} className={cx('main-contain')}>
                <div className={cx('item-label')}>
                    <span className={cx('label')}>trả góp 0%</span>
                </div>
                <div className={cx('item-img')}>
                    <img className={cx('img-product')} src={item.thumbnailUrl} alt="img-product" />
                    {/* <img
                        className={cx('img-tag')}
                        src={item.imgTag}
                        alt="tag"
                    /> */}
                </div>
                <h6 className={cx('title-product')}>{item.name}</h6>
                <strong className={cx('price')}>
                    {item.price.toLocaleString('vi-VN', {
                        maximumFractionDigits: 0,
                    })}
                    <small>-{item.discountRate}%</small>
                </strong>
            </Link>
        </li>
    );
}

export default ProductItem;
