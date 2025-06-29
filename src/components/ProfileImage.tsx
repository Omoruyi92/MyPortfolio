import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  size = 200,
  className = ''
}) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full border-4 border-white shadow-lg object-cover"
      />
    </div>
  );
};

export default ProfileImage;