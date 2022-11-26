import React, { useRef, useState } from "react";
import { Base } from "~components/BaseOptions";
import { HomeComponent } from "~components/Home";
import AuthContext from "~context/AuthContext";
export default function Home() {
  const headerHeight = useRef(null);
  return (
    <Base>
      <HomeComponent />
    </Base>
  );
}
