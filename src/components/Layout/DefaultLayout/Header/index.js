import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import { useEffect } from 'react';
// import fetchApi from '~/apiServices/userService';
import useStore from '~/store/hooks';
import { CartIcon } from '~/components/Icon';
import styles from './Header.module.scss';
import Search from '~/components/Search';
import MenuCartItem from '~/components/Popper/MenuCartItem';
import Nav from '~/components/Nav';
import { showAuthForm } from '~/store/Actions';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
const items = [
    {
        title: 'Laptop Dell Inspiron 15 3530 (71026454) - Chính hãng',
        price: '17,490,000₫',
        img: 'https://hoanghamobile.com/productlist/dst/Uploads/2024/02/17/n3530i716w1_638437598703921025.jpg',
    },
    {
        title: 'Laptop Dell Inspiron 15 3520 (71027003) - Chính hãng',
        price: '19,490,000₫',
        img: 'https://hoanghamobile.com/productlist/dst/Uploads/2024/02/17/n3530i716w1_638437598703921025.jpg',
    },
    {
        title: 'Laptop Dell Inspiron 15 3520 (71027003) - Chính hãng',
        price: '20,490,000₫',
        img: 'https://hoanghamobile.com/productlist/dst/Uploads/2024/02/17/n3530i716w1_638437598703921025.jpg',
    },
    {
        title: 'iPhone 15 (256GB) - Chính hãng VN/A',
        price: '12,199,000₫',
        img: 'https://hoanghamobile.com/productlist/dst/Uploads/2023/09/13/iphone-15-pink-pure-back-iphone-15-pink-pure-front-2up-screen-usen.png',
    },
];

const logo_smart_phone = [
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/OPPO42-b_5.jpg',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
    {
        img: 'https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png',
        brandName: 'Iphone',
    },
];

const cx = classNames.bind(styles);

function Header() {
    // useEffect(() => {
    //     const api = async () => {
    //         const res = await fetchApi(2)

    //         console.log(res)
    //     }
    //     api()
    // },[])
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    const user_login = !!localStorage.getItem('token');

    const dispatch = useStore()[1];

    const handleShowAuthForm = () => {
        dispatch(showAuthForm(true));
    };

    return (
        <header className={cx('header')}>
            <div className={cx('top-navigation')}>
                <ul className={cx('top-navigation-container')}>
                    <li className={cx('top-navigation__item')}>Giới Thiệu </li>
                    <li className={cx('top-navigation__item')}>Hỗ trợ</li>
                    {user_login ? (
                        <li className={cx('top-navigation__item')}>
                            <TippyHeadless
                                delay={[300, 500]}
                                interactive
                                placement="bottom-start"
                                render={(attrs) => (
                                    <div
                                        className={cx('menu-cart-item')}
                                        tabIndex="-1"
                                        {...attrs}
                                    >
                                        <div className={cx('user-menu')}> 
                                            <div className={cx('user-menu-item')}>
                                                <div onClick={handleLogout}>
                                                    Logout <FontAwesomeIcon icon={faArrowRightFromBracket}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            >
                              <div>user name</div>
                            </TippyHeadless>
                        </li>
                    ) : (
                        <li
                            onClick={handleShowAuthForm}
                            className={cx('top-navigation__item')}
                        >
                            Đăng nhập
                        </li>
                    )}
                </ul>
            </div>

            <div className={cx('heading')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        {/* <img
                            src="https://hoanghamobile.com/Content/web/img/logo-text.png"
                            alt="Logo"
                        /> */}
                        <h1> LOGO</h1>
                    </div>

                    {/* Search */}
                    <Search data={items} />

                    <div className={cx('order-tools')}>
                        <MenuCartItem
                            chilren={
                                <div className={cx('cart-icon')}>
                                    <CartIcon />
                                    <label className={cx('badge')}>
                                        <i className={cx('icon-left')}></i>
                                        <span className={cx('cart-total')}>
                                            {items.length}
                                        </span>
                                    </label>
                                </div>
                            }
                            data={items}
                        />
                    </div>
                </div>
            </div>

            <Nav data={logo_smart_phone} />
        </header>
    );
}

export default Header;
