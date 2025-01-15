import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";

export default function FallbackAvatars() {
  const [imageSrc, setImageSrc] = useState("/broken-image.jpg");
  const handleAvatarClick = () => {
    const newSrc =
      imageSrc === "/broken-image.jpg"
        ? "https://via.placeholder.com/150"
        : "/broken-image.jpg";
    setImageSrc(newSrc);
    console.log(newSrc);
  };
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        src={imageSrc}
        alt="Avatar"
        onClick={handleAvatarClick}
        style={{ cursor: "pointer" }}
      />
    </Stack>
  );
}
