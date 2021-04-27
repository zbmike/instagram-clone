import PropTypes from "prop-types";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useEffect } from "react/cjs/react.development";

import SuggestedProfiles from './suggested-profile';
import { getSuggestedProfiles } from "../../services/firebase";

export default function Suggestion({ userId, following }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    if (userId) {
      suggestedProfiles();
    }
  }, [userId]);

  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestion for you</p>
      </div>
      <div className="mt-4 grid gap 5">
        {profiles.map((profile) => (
          <SuggestedProfiles
            key={profile.docId}
            userDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestion.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
