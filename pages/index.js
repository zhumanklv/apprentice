import React, { useRef } from "react";
import { Base } from "~components/BaseOptions";
import { HomeComponent } from "~components/Home";
export default function Home() {
  const headerHeight = useRef(null);
  return (
    <Base>
      <HomeComponent />
    </Base>
  );
}
