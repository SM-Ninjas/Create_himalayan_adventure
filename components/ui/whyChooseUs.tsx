import React from 'react';

const WhyChooseUs = () => {
    const reasons = [
        'Established in 2015 by Passionate Travel Experts',
        'Government-Registered Adventure Company Based in Kathmandu',
        'Award-Winning Service with Tripadvisor Certificate of Excellence',
        'Trekking, Hiking, and Peak Climbing in Iconic Regions',
        'Extreme Sports like Bungee Jumping, Paragliding, and Rafting',
        'Cultural Tours, Wildlife Safaris, and Helicopter Tours Across Nepal, Tibet, and Bhutan'
    ];

    return (
        <div className="border rounded-lg p-4 shadow-lg mt-10 bg-gray-50">
            <h2 className="subtitle-text mb-3 text-center text-blue-600">Why Choose CreateHimalaya?</h2>
            <div className="grid gap-2">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="border rounded-md p-3 bg-white text-gray-700 shadow-sm hover:bg-indigo-50 hover:shadow-md transition ease-in-out duration-300">
                        <p className="small-text font-medium">{reason}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
