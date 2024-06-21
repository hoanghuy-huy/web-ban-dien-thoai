import classNames from "classnames/bind";

import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const  cx = classNames.bind(styles)


function Button({ children, primary = false, onClick ,href, to, className,...passProps}) {
    let Component = 'button'

   const props = {
        onClick,
        to,
        href,
        ...passProps
   }

    if(to) {
        props.to = to
        Component = Link
     } else if(href) {
        props.href = href
        Component = 'a'
     }
 
    const classes = cx('wrapper', {
        primary,
        [className]: className
    })

    return <Component className={classes} {...props}>
        {children}
    </Component>;
}

export default Button;