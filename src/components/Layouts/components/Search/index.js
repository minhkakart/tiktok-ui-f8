import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);

// const linhtinh = {
//     isLock: true,
//     sale: 5,
//     quantity: 1,
//     upgrade: 0,
//     index: 123,
//     id: 485,
//     sys: 0,
//     isExpires: false,
//     option: [
//         { param: 0, id: 65 },
//         { param: 1000, id: 66 },
//         { param: 10, id: 10 },
//         { param: 5, id: 67 },
//         { param: 100, id: 73 },
//         { param: 10, id: 69 },
//     ],
// };

function Search() {
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncer = useDebounce(input, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncer.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        axios
            .get('https://tiktok.fullstack.edu.vn/api/users/search', {
                params: {
                    q: debouncer,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
                console.log(searchResult);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncer]);

    function handleInputChange(e) {
        const searchValue = e.target.value
        if (!searchValue.startsWith(' ')){

            setInput(searchValue);
        }
        // console.log(input);
    }
    function handleHideResult() {
        setShowResult(false);
    }
    // function handleSubmit(e){

    // }

    return (
        <div className={cx('tippy-wrap')}>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((re) => {
                                return <AccountItem key={re.id} data={re} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={input}
                        onChange={handleInputChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!input && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setInput('');
                                setSearchResult([]);
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    <div className={cx('loading')}>
                        {loading && <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />}
                    </div>
    
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
