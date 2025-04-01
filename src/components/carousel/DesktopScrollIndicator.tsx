
import React from 'react';

const DesktopScrollIndicator: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center mt-12">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Scroll to explore more categories
      </p>
      <div className="w-8 h-12 border-2 border-aeskey-sky-blue rounded-full flex justify-center">
        <div className="w-1 h-3 bg-aeskey-sky-blue rounded-full mt-2 animate-bounce"></div>
      </div>
    </div>
  );
};

export default DesktopScrollIndicator;
