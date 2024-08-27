import React from 'react';
import { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // Check if the script is already added to avoid adding it multiple times
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.defer = true;
      script.setAttribute('data-use-service-core', '');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
        <h1 className='title-text text-center'>Hear Directly From Our Clients</h1>
    <div className="elfsight-app-87ed3f22-40c7-4e27-8a5c-2cba1a5660d4" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Reviews;
