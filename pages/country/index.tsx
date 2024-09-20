import { useRouter } from 'next/router';
import useActivitiesByLocationHook from "@/hooks/useActivitiesByLocationHook";
import React, { useEffect, useState } from 'react';

function Country() {
  const router = useRouter();
  const { country, region } = router.query;
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  useEffect(() => {
    if (typeof country === 'string') {
      setSelectedCountry(country);
    }
  }, [country]);

  const { data, isLoading, isError } = useActivitiesByLocationHook(selectedCountry || '');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading activities</div>;

  return (
    <div>
      <h1>Activities in {selectedCountry}</h1>
      {region ? (
        <h2>Region: {region}</h2>
      ) : (
        <h2>All Regions</h2>
      )}
      
      {data && data.activities && (
        <ul>
          {data.activities
            .filter((activity: any) => !region || activity.region === region)
            .map((activity: any) => (
              <li key={activity._id}>
                <h3>{activity.title}</h3>
                <p>Region: {activity.region}</p>
                <p>Category: {activity.category}</p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
}

export default Country;