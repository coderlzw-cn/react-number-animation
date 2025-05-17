import { AnimatePresence, motion } from 'motion/react';
import { memo, useCallback, useMemo, useRef } from 'react';
import './style.css';

export interface AnimatedNumberProps {
    value: number;
    className?: string;
}

const AnimatedNumber = memo<AnimatedNumberProps>(({ value, className = '' }) => {
    const prevValue = useRef<number>(value);

    const direction = useMemo(() => {
        const newDirection = value >= prevValue.current ? 'up' : 'down';
        prevValue.current = value;
        return newDirection;
    }, [value]);

    // 将数字转换为字符串并补零，确保长度一致
    const formatNumber = useCallback((num: number) => {
        const str = num.toString();
        const maxLength = Math.max(str.length, prevValue.current.toString().length);
        return str.padStart(maxLength, '0');
    }, []);

    // 获取当前值的数字数组
    const currentDigits = useMemo(() => formatNumber(value).split(''), [value, formatNumber]);

    return (
        <div className={`animated-number ${className}`}>
            {currentDigits.map((digit, index) => (
                <div key={`${index}-${digit}`} className="digit-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={digit}
                            initial={{
                                y: direction === 'up' ? 50 : -50,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: direction === 'up' ? -50 : 50,
                                opacity: 0,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                                mass: 1,
                                ease: [0.4, 0, 0.2, 1],
                                duration: 0.5,
                            }}
                        >
                            {digit}
                        </motion.div>
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
});

AnimatedNumber.displayName = 'AnimatedNumber';

export default AnimatedNumber;
