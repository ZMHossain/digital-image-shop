import React, { useContext } from "react";
import { userContext } from "./context/context";
import { useState } from "react";

const UserInfo = ({ user }) => {
  const { loginInfo } = useContext(userContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileUpload = () => {};
  const sections = [
    {
      title: "Full Name",
      content: user,
      subtitle: " Profile picture",
      contents: "Birthday",
    },
    {
      title: "Email Address",
      content: loginInfo?.email,
      subtitle: "Receive marketing emails",
      contents: "Gender",
    },
    {
      title: "Mobile",
      content: user,
      subtitle: "Personal Profile",
      contents: "Birthday",
    },
  ];
  console.log(sections);

  return (
    <div className="flex flex-row">
      {sections.map((section, index) => (
        <div className="pr-16" key={index}>
          <h1>{section.title}</h1>
          <p>{section.content}</p>
          <p>{section.subtitle}</p>
          <div className="flex flex-row">
            {index === 0 && (
              <input
                className="flex flex-col"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
              />
            )}
            <button className="flex pl-2 text-sky-900">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
