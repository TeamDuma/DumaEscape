import React, { FC } from 'react';

type ProfileIcon = {
  width?: number;
  height?: number;
};

const ProfileIcon: FC<ProfileIcon> = ({ width = '30', height = '30' }) => {
  return (
    <svg
      width={width}
      height={height}
      className="fill-accent  transition duration-200 hover:text-accent focus:text-accent"
      viewBox="0 96 960 960"
    >
      <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM220 896q-25 0-42.5-17.5T160 836v-34q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5T731 696q31 14 50 41t19 65v34q0 25-17.5 42.5T740 896H220Z" />
    </svg>
  );
};

export default ProfileIcon;
