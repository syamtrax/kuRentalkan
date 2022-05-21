import DetailProduk from "../Components/Profile/DetailProduk";
import ProfileCard from "../Components/Profile/ProfileCard";
import { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import React from "react";

const Profile = () => {
  const [newUserid, setNewUserid] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

useEffect(() => {
  const getProds = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  };

  getProds();
}, []);

  const q = query(collection(db, "mobil"), where("userid", "==", newUserid));
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
