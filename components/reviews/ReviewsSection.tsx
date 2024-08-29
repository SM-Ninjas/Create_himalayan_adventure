import React, { useEffect } from 'react';
import Script from 'next/script';

function ReviewsSection() {
    useEffect(() => {
        // Ensure the TripAdvisor widget is initialized
        const initTripAdvisorWidget = () => {
            const event = new Event('DOMContentLoaded', {
                bubbles: true,
                cancelable: true,
            });
            document.dispatchEvent(event);
        };

        initTripAdvisorWidget();
    }, []);

    return (
        <>
            <h1 className='title-text text-center mt-4'>Hear Directly From Our Clients</h1>
            <div className='container'>
                <div className='sk-ww-tripadvisor-reviews' data-embed-id='25454713'></div>
                <Script
                    src='https://widgets.sociablekit.com/tripadvisor-reviews/widget.js'
                    strategy='lazyOnload'
                    onLoad={() => {
                        console.log('TripAdvisor widget script loaded');
                    }}
                    onError={(e) => {
                        console.error('Error loading TripAdvisor widget script:', e);
                    }}
                />
            </div>
        </>
    );
}

export default ReviewsSection;
