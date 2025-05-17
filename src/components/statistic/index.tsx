import React, { memo, useEffect, useRef, useState } from 'react';
import './style.css';

export interface StatisticProps {
    value: number;
    title?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    className?: string;
    duration?: number;
    decimals?: number;
    separator?: string;
    decimal?: string;
    useGrouping?: boolean;
}

const Statistic = memo<StatisticProps>(
    ({
        value,
        title,
        prefix,
        suffix,
        className = '',
        duration = 2000,
        decimals = 0,
        separator = ',',
        decimal = '.',
        useGrouping = true,
    }) => {
        const [displayValue, setDisplayValue] = useState(0);
        const frameRef = useRef<number | undefined>(undefined);
        const startTimeRef = useRef<number | undefined>(undefined);
        const startValueRef = useRef<number>(0);

        // 格式化数字
        const formatNumber = (num: number) => {
            const [intPart, decimalPart] = num.toFixed(decimals).split('.');
            if (useGrouping) {
                const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
                return decimalPart ? `${formattedInt}${decimal}${decimalPart}` : formattedInt;
            }
            return num.toFixed(decimals);
        };

        // 缓动函数
        const easeOutExpo = (t: number) => {
            return t === 1 ? 1 : 1 - Math.pow(2, -15 * t);
        };

        useEffect(() => {
            if (value === displayValue) return;

            const startTime = Date.now();
            startTimeRef.current = startTime;
            startValueRef.current = displayValue;
            const endValue = value;
            const valueDiff = endValue - startValueRef.current;

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // 使用 easeOutExpo 缓动函数
                const easedProgress = easeOutExpo(progress);
                const currentValue = startValueRef.current + valueDiff * easedProgress;

                setDisplayValue(currentValue);

                if (progress < 1) {
                    frameRef.current = requestAnimationFrame(animate);
                } else {
                    setDisplayValue(endValue);
                }
            };

            frameRef.current = requestAnimationFrame(animate);

            return () => {
                if (frameRef.current) {
                    cancelAnimationFrame(frameRef.current);
                }
            };
        }, [value, duration, displayValue]);

        return (
            <div className={`statistic ${className}`}>
                {title && <div className="statistic-title">{title}</div>}
                <div className="statistic-content">
                    {prefix && <span className="statistic-prefix">{prefix}</span>}
                    <div className="statistic-value">{formatNumber(displayValue)}</div>
                    {suffix && <span className="statistic-suffix">{suffix}</span>}
                </div>
            </div>
        );
    },
);
Statistic.displayName = 'Statistic';
export default Statistic;
