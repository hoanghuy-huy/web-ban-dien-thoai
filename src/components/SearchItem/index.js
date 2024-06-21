import classNames from 'classnames/bind';

import styles from './Search.module.scss';


const cx = classNames.bind(styles);

function SearchItem({data}) {
    return (
        <>
            <div className={cx('search-item-container', 'separate')}>
                <div>
                    <img
                        className={cx('search-item-img')}
                        src={data.img}
                        alt="search-item"
                    ></img>
                </div>
                <div className={cx('search-infor-item')}>
                    <h2 className={cx('search-item-title')}>
                        {data.title}
                    </h2>
                    <h3 className={cx('search-item-price')}> {data.price}</h3>
                </div>
            </div>
        </>
    );
}

export default SearchItem;
