'use client';

import { useEffect, useRef } from 'react';
import styles from './CircularText.module.css';

export default function CircularText({
    text = "• CIRCULAR TEXT ROTATING AROUND THE CIRCLE • ",
    diameter = 300,
    rotationDuration = 20,
    fontSize = 16,
    clockwise = true,
    innerContent = null
}) {
    const textCircleRef = useRef(null);

    useEffect(() => {
        const circleText = textCircleRef.current;
        if (!circleText) return;

        // Clear any existing content
        circleText.innerHTML = '';

        // Calculate radius (half of diameter)
        const radius = diameter / 2;

        // Split text into individual characters
        const characters = text.split('');

        // Add each character as a span with appropriate rotation
        characters.forEach((char, i) => {
            const span = document.createElement('span');
            span.innerText = char;
            // Calculate rotation angle for each character
            const angle = clockwise
                ? i * (360 / characters.length)
                : -i * (360 / characters.length);

            // Set transform with rotation and position
            span.style.transform = `rotate(${angle}deg)`;
            span.style.transformOrigin = `0 ${radius}px`;

            // Add character to the circle
            circleText.appendChild(span);
        });
    }, [text, diameter, clockwise]);

    return (
        <div
            className={styles.circleContainer}
            style={{ width: `${diameter}px`, height: `${diameter}px` }}
        >
            <div
                className={styles.rotatingCircle}
                style={{
                    animationDuration: `${rotationDuration}s`,
                    animationDirection: clockwise ? 'normal' : 'reverse'
                }}
            >
                <div
                    className={styles.circleText}
                    ref={textCircleRef}
                    style={{
                        fontSize: `${fontSize}px`
                    }}
                ></div>
            </div>
            {innerContent && (
                <div className={styles.innerContent}>
                    {innerContent}
                </div>
            )}
        </div>
    );
}