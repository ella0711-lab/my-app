"use client";

import dynamic from "next/dynamic";

const ProfilePageClient = dynamic(() => import("./profile-client"), {
  ssr: false,
});

export default function Page() {
  return <ProfilePageClient />;
}

