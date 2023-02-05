import React from "react";

const FooterList = ({ list, title }: any) => {
  return (
    <>
      <h2 className="text-xl font-medium">{title}</h2>
      <ul className="flex flex-col gap-2">
        {list.map((item, i) => (
          <li key={i} className="footerLi">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterList;
