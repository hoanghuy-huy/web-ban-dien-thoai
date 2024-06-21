import classNames from 'classnames/bind';
import styles from './BoxProduct.module.scss';
import ProductItem from '../ProductItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function BoxProduct({ props }) {
    const renderItem = () => {
        return props.map((item, index) => (
            <ProductItem key={index} item={item} />
        ));
    };
    return (
        <div className={cx('box-product')}>
            <div className={cx('header-container')}>
                <div className={cx('heading')}> 
                    <Button primary children={'Điện Thoại nổi bật'}/>
                </div>
                <div className={cx('others-link')}>
                     <Button children={'Điện Thoại nổi bật'}/>
                </div>
            </div>
            <ul className={cx('list-product')}>{renderItem()}</ul>
        </div>
    );
}

export default BoxProduct;
