import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import SearchItem from '~/components/SearchItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderSearchItem from '~/components/SearchItem/HeaderSearchItem';
import { SearchIcon } from '~/components/Icon';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ data: items }) {
    const renderSearchItem = () => {
        return items.map((item, index) => (
            <SearchItem key={index} data={item} />
        ));
    };
    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <TippyHeadless
                interactive
                placement="bottom"
                render={(attrs) => (
                    <div
                        className={cx('search-list-item')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <HeaderSearchItem title={'Sản phẩm gợi ý'} />
                            {renderSearchItem()}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search-box')}>
                    <input
                        className={cx('search-input')}
                        placeholder="Hôm nay bạn cần tìm gì?"
                    />
                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </div>
            </TippyHeadless>            
        </div>

    );
}

export default Search;
