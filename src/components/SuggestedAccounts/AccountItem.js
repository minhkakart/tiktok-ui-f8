import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '../Button';

const cx = classNames.bind(styles);
function AccountItem({ data = {} }) {
    function renderPreview(props) {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <div className={cx('pre-head')}>
                            <Image className={cx('avatar-large')} src={data.avatar} alt={data.last_name} />
                            <div className={cx('padd')}>
                                <Button primary small>
                                    Follow
                                </Button>
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>
                                <span>{data.full_name}</span>
                                {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                            </h4>
                            <span className={cx('username')}>{data.nickname}</span>
                        </div>
                        <p className={cx('analytis')}>
                            <span className={cx('value')}>8M followers</span>
                            <span className={cx('value')}>432.5K Likes</span>
                        </p>
                    </div>
                </PopperWrapper>
            </div>
        );
    }

    return (
        <div>
            <Tippy offset={[-25, 0]} interactive delay={[900, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('acc-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{data.full_name}</span>
                            {data.tick && <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />}
                        </h4>
                        <span className={cx('username')}>{data.nickname}</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object,
};
export default AccountItem;
