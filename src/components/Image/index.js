import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, className, fallBack: custom = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    function handleErr() {
        setFallBack(custom);
    }

    return (
        // eslint-disable-next-line
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            {...props}
            onError={handleErr}
        />
    );
});

export default Image;
