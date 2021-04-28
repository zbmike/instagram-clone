import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import Header from "./header";
import { getUserPhotosByUsername } from "../../services/firebase";

const reducer = (state, newState) => ({
  ...state,
  ...newState,
});

const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};

export default function UserProfile({ user }) {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.userId);
      console.log(photos);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }
    if (user) getProfileInfoAndPhotos();
  }, [user]);
  return (
    <>
      <Header />
    </>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    emailAddress: PropTypes.string,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    following: PropTypes.array,
    followers: PropTypes.array,
    dateCreated: PropTypes.number,
  }),
};
