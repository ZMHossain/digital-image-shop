import React from "react";

const UserInfo = ({ user }) => {
  const sections = [
    {
      title: "Full Name",
      content: user,
      subtitle: "Personal Profile",
      contents: "Birthday",
    },
    {
      title: "Email Address",
      content: user,
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
          <div className="flex flex-row">
            <p>{section.subtitle}</p>
            <button className="flex pl-2 text-sky-900">Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserInfo;
