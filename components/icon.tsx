import React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:shadow-md transition"
    >
      {icon}
    </button>
  );
};

export default IconButton;
