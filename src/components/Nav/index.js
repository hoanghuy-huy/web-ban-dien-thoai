import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function Nav({ data }) {

    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = document.documentElement.scrollTop;

            if(scrollTop > 120) {
                navRef.current.classList.add(cx('nav-fixed'))
            } else {
                navRef.current.classList.remove(cx('nav-fixed'))
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={cx('nav')} ref={navRef}>
            <div className={cx('nav-container')} >
                <ul className={cx('nav-item-container')}>
                    {/* {data.map((item, index) => {
                        return (
                            <li key={index} className={cx('nav-item')}>
                                <img
                                    className={cx('brand-logo')}
                                    src={item.img}
                                    alt={item.brandName}
                                />
                            </li>
                        );
                    })} */}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
