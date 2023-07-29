// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import TooltipTippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import styles from './Header.module.scss';
import Button from '~/components/Button';

import classNames from 'classnames/bind';
import Menu from '~/components/Popper/Menu';
import { Fragment } from 'react';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layouts/components/Search';
import { Link } from 'react-router-dom';
import routesConfig from '~/config/routes';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedbanck and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = false;

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        separator: true,
    },
];

function Header() {
    // const [searchResult, setSearchResult] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1]);
    //     }, 100);
    // });

    function handleMenuChange(menuItem) {}

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                    <Link to={routesConfig.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                {/* <HeadlessTippy
                    // visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy> */}

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <Fragment>
                            <TooltipTippy content="Upload video" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </TooltipTippy>
                            <TooltipTippy content="Message" placement="bottom" delay={[0, 50]}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </TooltipTippy>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Button text>Upload</Button>
                            <Button primary>Log In</Button>
                        </Fragment>
                    )}

                    <Fragment>
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    src="https://img2.hayocdn.com/client/image/51/4805ede74e10447998326ae49a5e6cf6 .png"
                                    alt="hoaa"
                                    className={cx('user-avatar')}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </Fragment>
                </div>
            </div>
        </header>
    );
}

export default Header;
