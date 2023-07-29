

import classNames from 'classnames/bind';
import styles from './SideBar.module.scss'
import routes from '~/config/routes';

import Menu, {MenuItem} from './Menu';
import { FollowingIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/';

const cx = classNames.bind(styles)

function SideBar() {
    return ( 
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={routes.home} icon={<HomeIcon/>} />
                <MenuItem title="Following" to={routes.following} icon={<FollowingIcon/>} />
                <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon/>} />
            </Menu>
            <SuggestedAccounts label='Suggested accounts'/>
            <SuggestedAccounts label='Following accounts'/>
        </aside>
        );
}

export default SideBar;