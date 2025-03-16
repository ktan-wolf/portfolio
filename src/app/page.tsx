import React from "react"; // Explicitly importing React to ensure JSX support
import dayjs from "dayjs";
import { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { USER } from "@/features/profile/data/user";
import { ProfilePage } from "@/features/profile/page";

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

export default function Page() {
  const websiteJsonLd = getPageJsonLd();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        type="application/ld+json"
      />
      <ProfilePage />
    </>
  );
}


