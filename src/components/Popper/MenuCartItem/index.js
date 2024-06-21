import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import PopperWrapper from '~/components/Popper/Wrapper';
import styles from './MenuCartItem.scss';
import classNames from 'classnames/bind';
import CartItem from './CartItem';

const cx = classNames.bind(styles);

function MenuCartItem({ chilren, data }) {
    return (
        <TippyHeadless
            delay={[300, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-cart-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('heading-menu-cart')}>
                            Sản phẩm mới thêm
                        </h3>

                        {data.map((item, index) => {
                            return <CartItem key={index} item={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            {chilren}
        </TippyHeadless>
    );
}

export default MenuCartItem;
