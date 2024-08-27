import React from 'react';
import Script from 'next/script';

function ReviewsSection() {
    return (
        <>
            <h1 className='title-text text-center'>Hear Directly From Our Clients</h1>
            <div className='container'>
                <div className='sk-ww-tripadvisor-reviews' data-embed-id='25454713'></div>
                <Script
                    src='https://widgets.sociablekit.com/tripadvisor-reviews/widget.js'
                    strategy='lazyOnload'
                    onLoad={() => {
                        // You can perform additional actions here if needed
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
