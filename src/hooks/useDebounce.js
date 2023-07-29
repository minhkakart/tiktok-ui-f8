import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
        const cleaner = setTimeout(() => {
            setDebounce(value);
        }, delay);
        return () => clearTimeout(cleaner);
        // eslint-disable-next-line
    }, [value]);

    return debounce;
}

export default useDebounce;
