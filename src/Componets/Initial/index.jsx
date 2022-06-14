import React from "react";
import { Feed, Head } from "../";

const Initial = () => {
  return (
    <div className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos." />
      <Feed />
    </div>
  );
};

export default Initial;
