
import React from 'react';
import { MousePointerClick } from 'lucide-react';

const DesktopScrollIndicator: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center mt-8 animate-pulse">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Scroll to explore more
      </p>
      <div className="w-8 h-14 border-2 border-aeskey-sky-blue rounded-full flex flex-col justify-start items-center p-2">
        <div className="w-2 h-2 bg-aeskey-sky-blue rounded-full animate-bounce mb-1"></div>
        <MousePointerClick size={14} className="text-aeskey-sky-blue mt-2" />
      </div>
    </div>
  );
};

export default DesktopScrollIndicator;
