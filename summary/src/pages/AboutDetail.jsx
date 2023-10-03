import React from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  //   const params = useParams();
  //   console.log(params);
  const { aboutId } = useParams();
  return <div>AboutDetail : {aboutId}</div>;
}
