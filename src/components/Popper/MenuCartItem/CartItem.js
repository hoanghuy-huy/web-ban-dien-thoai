import styles from './MenuCartItem.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CartItem({item}) {
    return (
        <div className={cx('menu-cart-item-container')}>
            <img
                className={cx('cart-item-image')}
                src={item.img}
                alt="item"
            />
            <div className={cx('cart-item-info')}>
                <h2 className={cx('cart-item-title')}>
                    {item.title}
                </h2>
                <h3 className={cx('cart-item-price')}> {item.price}</h3>
            </div>
        </div>
    );
}

export default CartItem;
