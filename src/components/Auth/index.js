import { useState } from 'react';
import classNames from 'classnames/bind';
import { ImSpinner8 } from "react-icons/im";

import styles from './Auth.module.scss';
import useStore from '~/store/hooks';
import { showAuthForm } from '~/store/Actions';
import  loginApi from '~/apiServices/authService';
const cx = classNames.bind(styles);

const user = [
    {
        password: '123',
        email: 'hoanghuy@gmail.com',
    },
    {
        password: '123',
        email: 'huy@gmail.com',
    },
    {
        password: '123',
        email: 'huy@gmail.com',
    },
];

export default function Auth() {
    const [stateShowForm, setStateShowFrom] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useStore()[1];
    const [loading, setLoading] = useState(false)


    const handleShowForm = (state) => {
        setEmail('');
        setPassword('');
        setStateShowFrom(state);
    };

    const handleValueEmail = (email) => {
        setEmail(email);
    };

    const handleValuePassword = (password) => {
        setPassword(password);
    };

    const handleValueConfirmPassword = (confirmPassword) => {
        setConfirmPassword(confirmPassword);
    };


    const handleLogin = async (event) => {
        event.preventDefault();
        

        if (email === '' || password === '') {
            return alert('Missing value');
        }
        setLoading(true)
        let res = await loginApi(email, password)

        
        if(res && res.token) {
            localStorage.setItem("token",res.token)
            dispatch(showAuthForm(false))
            alert('Đăng nhập thành công')
        } else {
            const response = res.response
            if(response && response.status === 400) {
                alert(response.data.error)
            }
        }
        
        setLoading(false)


    };

    const handleRegister = (event) => {
        event.preventDefault();
        if (email === '' || password === '' || confirmPassword === '')
            return alert('Missing value');
        for (let i = 0; i < user.length; i++) {
            if (email === user[i].email) return alert('Email already exists');

            if (password !== confirmPassword)
                return alert('Passwords do note match');
        }

        const newUser = { email: email, password: password };

        user.push(newUser);

        return alert('Register successfully');
    };

    //   const dispatch = useStore()[1]

    function handleHideAuthForm(e) {
        e.preventDefault();
        dispatch(showAuthForm(false));
    }


    return (
        <>
            <div>
                {stateShowForm === false ? (
                    <div
                        className={cx(
                            'form-container',
                            'form-container--flexible',
                            'login',
                        )}
                    >
                        <div className={cx('Container-header-form-login')}>
                            <p className={cx('title')}>Đăng nhập</p>
                            <div
                                className={cx(
                                    'Container-header-form-login_btn-exits',
                                )}
                            ></div>
                        </div>
                        <form className={cx('form')}>
                            <input
                                type="email"
                                className={cx('input')}
                                placeholder="Email"
                                value={email}
                                required
                                onChange={(event) =>
                                    handleValueEmail(event.target.value)
                                }
                            />
                            <input
                                type="password"
                                className={cx('input')}
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(event) =>
                                    handleValuePassword(event.target.value)
                                }
                            />
                            <p className={cx('page-link')}>
                                <span className={cx('page-link-label')}>
                                    Quên tài khoản?
                                </span>
                            </p>
                            <button
                                className={cx('form-btn',{
                                    'disable': email === '' || password === '' ? true : false
                    
                                })}
                                onClick={(event) =>
                                    handleLogin(event, email, password)
                                }
                            >
                                { loading && <ImSpinner8 className={cx('icon-loading')}/> } <span> Đăng nhập</span>
                            </button>
                            <button
                                className={cx('form-btn', 'btn-nomal')}
                                onClick={(e) => handleHideAuthForm(e)}
                            >
                                Về trang chủ
                            </button>
                        </form>
                        <p className={cx('sign-up-label')}>
                            Bạn chưa có tài khoản?
                            <span
                                className={cx('sign-up-link')}
                                onClick={() => handleShowForm(true)}
                            >
                                Đăng ký
                            </span>
                        </p>
                    </div>
                ) : (
                    <div className={cx('form-container', 'register')}>
                        <p className={cx('title')}>Đăng ký tài khoản</p>
                        <form className={cx('form')}>
                            <input
                                type="email"
                                value={email}
                                className={cx('input')}
                                placeholder="Email"
                                onChange={(event) =>
                                    handleValueEmail(event.target.value)
                                }
                            />
                            <input
                                type="password"
                                className={cx('input')}
                                placeholder="Password"
                                value={password}
                                onChange={(event) =>
                                    handleValuePassword(event.target.value)
                                }
                            />
                            <input
                                type="password"
                                className={cx('input')}
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(event) =>
                                    handleValueConfirmPassword(
                                        event.target.value,
                                    )
                                }
                            />
                            <button
                                className={cx('form-btn')}
                                onClick={(event) => handleRegister(event)}
                            >
                                Đăng ký
                            </button>
                            <button
                                className={cx('form-btn', 'btn-nomal')}
                                onClick={(e) => handleHideAuthForm(e)}
                            >
                                Về trang chủ
                            </button>
                        </form>
                        <p className={cx('sign-up-label')}>
                            Bạn đã có tài khoản?
                            <span
                                className={cx('sign-up-link')}
                                onClick={() => handleShowForm(false)}
                            >
                                Đăng nhập
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
