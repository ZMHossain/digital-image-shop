import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { deepOrange } from "@mui/material/colors";

export default function FallbackAvatars() {
  const [imageSrc, setImageSrc] = useState(
    "https://as2.ftcdn.net/v2/jpg/05/06/25/11/1000_F_506251131_EO3crbdUKjf6HRy5tL1GFklKaocOHPpq.jpg"
  );
  const handleAvatarClick = () => {
    const newSrc =
      imageSrc === "/broken-image.jpg"
        ? "https://as2.ftcdn.net/v2/jpg/05/06/25/11/1000_F_506251131_EO3crbdUKjf6HRy5tL1GFklKaocOHPpq.jpg"
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
