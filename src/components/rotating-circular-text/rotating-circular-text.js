'use client';
import { useEffect, useRef, useMemo } from 'react';
import styles from './CircularText.module.css';

/**
 * CircularText Component - Creates text that rotates in a circular pattern
 * 
 * @param {Object} props - Component properties
 * @param {string} props.text - Text to display in circular pattern (default: "• Hello I'm a FullStack Web Developer • ")
 * @param {number} props.diameter - Diameter of the circle in pixels (default: 300)
 * @param {number} props.rotationDuration - Duration of one complete rotation in seconds (default: 20)
 * @param {number} props.fontSize - Font size of the text in pixels (default: 16)
 * @param {boolean} props.clockwise - Direction of rotation (true for clockwise, false for counter-clockwise) (default: true)
 * @param {React.ReactNode} props.innerContent - Optional content to display in the center of the circle (default: null)
 * @returns {JSX.Element} Circular rotating text component
 */
export default function CircularText({
    text = "• Hello I'm a FullStack Web Developer • ",
    diameter = 300,
    rotationDuration = 20,
    fontSize = 16,
    clockwise = true,
    innerContent = null
}) {
    const textCircleRef = useRef(null);
    
    // Memoize dimension-related styles to prevent unnecessary recalculations
    const containerStyle = useMemo(() => ({
        width: `${diameter}px`, 
        height: `${diameter}px`
    }), [diameter]);
    
    const circleTextStyle = useMemo(() => ({ 
        fontSize: `${fontSize}px` 
    }), [fontSize]);
    
    const rotationStyle = useMemo(() => ({
        animationDuration: `${rotationDuration}s`,
        animationDirection: clockwise ? 'normal' : 'reverse'
    }), [rotationDuration, clockwise]);

    useEffect(() => {
        const circleText = textCircleRef.current;
        if (!circleText) return;

        // Clear any existing content
        circleText.innerHTML = '';

        // Calculate radius (half of diameter)
        const radius = diameter / 2;

        // Split text into individual characters
        const characters = text.split('');
        
        // Calculate angle per character for even distribution
        const anglePerCharacter = 360 / characters.length;

        // Create document fragment for better performance
        const fragment = document.createDocumentFragment();

        // Add each character as a span with appropriate rotation
        characters.forEach((char, i) => {
            const span = document.createElement('span');
            span.innerText = char;
            
            // Calculate rotation angle for each character based on direction
            const angle = clockwise
                ? i * anglePerCharacter
                : -i * anglePerCharacter;

            // Set transform with rotation and position
            span.style.transform = `rotate(${angle}deg)`;
            span.style.transformOrigin = `0 ${radius}px`;

            // Add character to the fragment
            fragment.appendChild(span);
        });
        
        // Append all spans at once for better performance
        circleText.appendChild(fragment);
        
        // Clean up function to prevent memory leaks
        return () => {
            if (circleText) {
                circleText.innerHTML = '';
            }
        };
    }, [text, diameter, clockwise]);

    return (
        <div
            className={styles.circleContainer}
            style={containerStyle}
        >
            <div
                className={styles.rotatingCircle}
                style={rotationStyle}
            >
                <div
                    className={styles.circleText}
                    ref={textCircleRef}
                    style={circleTextStyle}
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