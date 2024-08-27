import React from 'react';

const GoogleReviewCard = () => {
  return (
    <a
      href="https://www.google.com/search?q=Create+Himalaya+Adventure+Pvt.+Ltd.&stick=H4sIAAAAAAAA_-NgU1I1qDC2TE0ytDQxSTFITDUxs7C0MqgwTEk0M01JNkxOTrY0tzAxXsSq7FyUmliSquCRmZuYk1iZqOCYUpaaV1JalKoQUFaip-BTkqIHAH6tCu5PAAAA&hl=en-GB&mat=CQ8CBFmHS7SRElUBEKoLacDdeC8Hfdo7L_47SJHdECgmhG7sxOHcP7yiQXbcLJSBin5or-Ct-J2_OUKfs5K8T1W-qlWGcMY9QBtDl36CU_3qMGO_qkSS9oZd0HRx5j8wGggHBiCnAhq8dA&authuser=0&ved=2ahUKEwiqoPa-75SIAxW_SmwGHd5xNRIQ-MgIKAN6BAhCEBE"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Google_Play_Logo.svg/1200px-Google_Play_Logo.svg.png"
          alt="Google Reviews"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">Create Himalaya Adventure</h3>
          <p className="text-gray-600">5 Stars on Google</p>
          <p className="mt-2 text-gray-600">
            "Experience the best adventure tours with Create Himalaya Adventure! Read reviews on Google and discover why we are a top-rated company."
          </p>
        </div>
      </div>
    </a>
  );
};

export default GoogleReviewCard;
