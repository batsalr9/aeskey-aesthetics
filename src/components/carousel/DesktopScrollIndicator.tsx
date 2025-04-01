
import React from 'react';
import { MousePointerClick } from 'lucide-react';

const DesktopScrollIndicator: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center mt-12 animate-pulse">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Scroll to explore more categories
      </p>
      <div className="w-10 h-16 border-2 border-aeskey-sky-blue rounded-full flex flex-col justify-start items-center p-2">
        <div className="w-3 h-3 bg-aeskey-sky-blue rounded-full animate-bounce mb-1"></div>
        <MousePointerClick size={16} className="text-aeskey-sky-blue mt-2" />
      </div>
    </div>
  );
};

export default DesktopScrollIndicator;
