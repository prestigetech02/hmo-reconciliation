import { useState, useCallback, useRef } from 'react';

export function useToast() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const timerRef = useRef(null);

    const showToast = useCallback(({ message, duration = 4000 }) => {
        
        if (timerRef.current) clearTimeout(timerRef.current);

        setMessage(message);
        setIsOpen(true);

        
        timerRef.current = setTimeout(() => {
        setIsOpen(false);
        }, duration);
    }, []);

    const hideToast = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsOpen(false);
    }, []);

    return { isOpen, message, showToast, hideToast };
}
