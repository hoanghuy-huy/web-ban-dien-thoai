import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function HeaderSearchItem({ title }) {
    return <div className={cx('search-heading')}>{title}</div>;
}

export default HeaderSearchItem;
