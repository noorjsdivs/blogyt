import React from "react";
import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        height={50}
        src="https://www.noormohammad.live/static/media/roundedProfile.477a194221d255c8ce26.png"
        alt="LogoImage"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
