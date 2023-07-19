import Button from '~/components/Button';

import styles from './Menu.module.scss';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item',{separator: data.separator})
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
