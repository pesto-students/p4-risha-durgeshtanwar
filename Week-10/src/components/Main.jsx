import React from "react";
import Image from "./Image";

function Main() {
  return (
    <main className="container mx-auto justify-center align-items center px-3">
      <div className="flex flex-row">
        <div>
          <h1 className="text-6xl mb-3">More than just shorter Links</h1>
          <p>
            Build your brand's recoginition and get detailed insights on how
            your links are performing
          </p>
        </div>
        <div className="flex justify-center align-middle">
          <Image />
        </div>
      </div>
    </main>
  );
}

export default Main;
