

import classNames from 'classnames/bind';
import styles from './SideBar.module.scss'

const cx = classNames.bind(styles)

function SideBar() {
    return ( 
        <aside className={cx('wrapper')}>
            <p>Vành khuyên nhỏ, lừa dối, quẻ bói TOP 1 đều xứng đáng...</p>
            <p>dangminh3101</p>
            <p>#nhachayminmin</p>
            <p>LIVE</p>
            
        </aside>
        );
}

export default SideBar;