import React from 'react'
import TripAdvisorCard from './TripAdvisorReview'
import GoogleReviewCard from './GoogleReviews'

function ReviewsCHA() {
    return (
        <div className='container border flex'>
            <TripAdvisorCard />
            <GoogleReviewCard />
        </div>
    )
}

export default ReviewsCHA