import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ProductItem({ item }) {
    return (
        <li className={cx('item')}>
            <Link to="/product-detail" className={cx('main-contain')}>
                <div className={cx('item-label')}>
                    <span className={cx('label')}>{item.labelItem}</span>
                </div>
                <div className={cx('item-img')}>
                    <img
                        className={cx('img-product')}
                        src={item.imgItem}
                        alt="img-product"
                    ></img>
                    <img
                        className={cx('img-tag')}
                        src={item.imgTag}
                        alt="tag"
                    ></img>
                </div>
                <h3 className={cx('title-product')}>{item.title}</h3>
                <strong className={cx('price')}>
                    {item.price}
                    <small>-4%</small>
                </strong>
            </Link>
        </li>
    );
}

export default ProductItem;
