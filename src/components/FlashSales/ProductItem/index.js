import classNames from 'classnames/bind';

import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);

function ProductItemFashSale({ item }) {
    return (
        <div className={cx('content-item')}>
        <img
            src={item.img}
            alt="item"
        />
        <div className={cx('item-info')}>
            <h3 className={cx('title')}>
                {item.title}
            </h3>
            <span className={cx('price')}>
                <strong>{item.price}</strong>
                <strike>{item.beforePrice}</strike>
            </span>
        </div>
    </div>

    );
}

export default ProductItemFashSale;
