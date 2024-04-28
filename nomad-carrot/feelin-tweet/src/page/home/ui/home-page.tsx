"use client";

import {useEffect, useState} from "react";
import {fetchGetUserMe, UserResponse} from "@/src/entities/profile";
import {TimelineWidget} from "@/src/widgets/timeline";
import {useRouter} from "next/navigation";
import {HeaderWidget} from "@/src/widgets/header";

export default function HomePage() {
  const [response, setResponse] = useState<UserResponse>();
  const router = useRouter();

  useEffect(() => {
    if (response && response.profile === null) {
      router.replace("/profile/new");
      return;
    }
    if (response === undefined) {
      fetchGetUserMe()
        .then(userMe => setResponse(userMe.result!));
    }
  }, [response, router]);

  if (response === undefined || response.profile === null) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen">
      <HeaderWidget/>
      <TimelineWidget/>
    </div>
  );
}
