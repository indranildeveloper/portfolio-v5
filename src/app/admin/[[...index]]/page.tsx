"use client";

import { FC } from "react";
import { NextStudio } from "next-sanity/studio";
import sanityConfig from "@/sanity/sanity.config";

const AdminPage: FC = () => {
  return <NextStudio config={sanityConfig} />;
};

export default AdminPage;
