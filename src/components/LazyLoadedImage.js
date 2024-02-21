import React, { useRef, useEffect, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
    const imageRef = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        const currentImageRef = imageRef.current;

        if (currentImageRef) {
            observer.observe(currentImageRef);
        }

        return () => {
            if (currentImageRef) {
                observer.unobserve(currentImageRef);
            }
        };
    }, [imageRef]); // Include imageRef in the dependency array

    return (
        <img
            ref={imageRef}
            src={isIntersecting ? src : ''}
            alt={alt}
            style={{ opacity: isIntersecting ? 1 : 0, transition: 'opacity 0.8s' }}
            className={className}
        />
    );
};

export default LazyImage;
