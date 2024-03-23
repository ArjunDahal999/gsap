import React, { useEffect } from 'react';

interface StarProps
{
    left: string;
    animationDuration: number;
}

const starAnimation = {
    animation: 'starAnimation linear infinite',
};

const glowAnimation = {
    animation: 'glowAnimation linear infinite',
};

const Star: React.FC<StarProps> = ({ left, animationDuration }) => (
    <div
        style={{
            position: 'absolute',
            width: '2px',
            height: '2px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            opacity: '0',
            boxShadow: '0 0 5px #fff',
            left,
            ...starAnimation,
            animationDuration: `${animationDuration}s`,
        }}
    />
);

const Glow: React.FC = () => (
    <div
        style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%)',
            opacity: '0.3',
            ...glowAnimation,
        }}
    />
);

interface StarsAnimationProps
{
    numStars: number;
}

const StarsAnimation: React.FC<StarsAnimationProps> = ({ numStars }) =>
{
    useEffect(() =>
    {
        const container = document.body;

        for (let i = 0; i < numStars; i++)
        {
            createStar(container);
        }

        function createStar(container: HTMLElement)
        {
            const star = document.createElement("div");
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`;
            container.appendChild(star);
        }
    }, [numStars]);

    return (
        <>
            <Glow />
        </>
    );
};

export default StarsAnimation;
