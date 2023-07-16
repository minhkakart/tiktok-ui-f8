import classNames from "classnames/bind";
import styles from "./Button.module.scss"
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Button({to, href, onClick, primary, outline, text, rounded, small, large, diabled, leftIcon, rightIcon, children, className, ...other}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...other
    }
    if(diabled){
        Object.keys(props).forEach(key=>{
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
            }
        })
    }
    if (to){
        props.to = to
        Comp = Link
    } else if(href){
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
        diabled
    })

    return ( 
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;