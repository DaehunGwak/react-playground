'use client';

import {useEffect, useState} from "react";
import {fetchGetUserMe, UserResponse} from "@/src/entities/profile";
import {FirstProfileWidget} from "@/src/widgets/profile";

export default function ProfileNewPage() {
  const [response, setResponse] = useState<UserResponse>();

  useEffect(() => {
    if (response === undefined) {
      fetchGetUserMe()
        .then(userMe => setResponse(userMe.result!));
    }
  }, [response]);


  if (response === undefined) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <FirstProfileWidget user={response.user}/>
    </div>
  );
}