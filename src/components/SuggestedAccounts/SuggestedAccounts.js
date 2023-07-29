import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import Button from '../Button';

const cx = classNames.bind(styles);

const eg = {
    "id": 2,
    "first_name": "Đào Lê",
    "last_name": "Phương Hoa",
    "full_name": "Đào Lê Phương Hoa",
    "nickname": "hoaahanassii",
    "avatar": "https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg",
    "bio": "✨ 1998 ✨\nVietnam 🇻🇳\nĐỪNG LẤY VIDEO CỦA TÔI ĐI SO SÁNH NỮA. XIN HÃY TÔN TRỌNG !",
    "tick": true,
    "followings_count": 1,
    "followers_count": 63,
    "likes_count": 1000,
    "website_url": "https://fullstack.edu.vn/",
    "facebook_url": "",
    "youtube_url": "",
    "twitter_url": "",
    "instagram_url": "",
    "created_at": "2022-05-05 23:10:05",
    "updated_at": "2022-05-05 23:11:39"
}

function SuggestedAccounts({label}) {

    

    return <div className={cx('wrapper')}>
        <p className={cx('label')}>{label}</p>
        <AccountItem data={eg}/>
        <AccountItem data={eg}/>
        <AccountItem data={eg}/>
        <Button text className={cx('btn-see-all')}>See all</Button>
    </div>;
}

SuggestedAccounts.prototype = {
    label: PropTypes.string.isRequired
}

export default SuggestedAccounts;
