import DetailProduk from "../Components/Profile/DetailProduk";
import ProfileCard from "../Components/Profile/ProfileCard";

import React from "react";

const Profile = () => {
  return (
    <>
      <div className="my-36 mx-auto container flex justify-center h-full w-full font-nunito">
        <div className="flex w-full">
          <left className="flex w-full">
            <ProfileCard />
            <DetailProduk />
          </left>
          <right></right>
        </div>
      </div>
    </>
  );
};

export default Profile;
