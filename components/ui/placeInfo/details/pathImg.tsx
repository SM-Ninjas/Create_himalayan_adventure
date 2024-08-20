import React from "react";

interface pathImageTypes {
  pathImg?: string | undefined;
}
function PathImg(pathImg: pathImageTypes) {
  return (
    <div className="mt-4">
      <img src={pathImg?.pathImg} height={400} width={800} alt="Image not avaliable" className="border" />
    </div>
  );
}
export default PathImg;