import React from "react";
import TripAdvisorCard from "./TripAdvisorReview";
import GoogleReviewCard from "./GoogleReviews";
import WriteReview from "./WriteReview";

function ReviewsCHA() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
        Journiers Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border rounded-lg shadow-md p-4">
          <TripAdvisorCard />
        </div>
        <div className="border rounded-lg shadow-md p-4">
          <WriteReview />
        </div>
        <div className="border rounded-lg shadow-md p-4">
          <GoogleReviewCard />
        </div>
      </div>
    </div>
  );
}

export default ReviewsCHA;