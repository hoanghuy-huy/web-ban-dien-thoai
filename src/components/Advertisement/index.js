import classNames from 'classnames/bind';

import styles from './Ads.module.scss';


const cx = classNames.bind(styles);

function Ads({img}) {
    return (
        <div className={cx('ads-topzone')}>
            <div className={cx('ads-topzone-container')}>
                <img
                    className={cx('ads-item')}
                    src={img}
                    alt="ads"
                />
            </div>
        </div>
    );
}

export default Ads;
