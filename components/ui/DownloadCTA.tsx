'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

interface DownloadCTAProps {
  variant?: 'hero' | 'inline' | 'closing';
  buttonText?: string;
  showButton?: boolean;
  className?: string;
}

export function DownloadCTA({ 
  variant = 'inline', 
  buttonText = 'Download the App',
  showButton = true,
  className = '' 
}: DownloadCTAProps) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const userAgent = navigator.userAgent || navigator.vendor;
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));
  }, []);

  const AppStoreButton = () => (
    <a
      href="#"
      className="inline-block transition-all duration-200 hover:scale-105 hover:shadow-lg"
      aria-label="Download on the App Store"
    >
      <svg
        width={variant === 'closing' ? '160' : '120'}
        height={variant === 'closing' ? '48' : '36'}
        viewBox="0 0 120 40"
        className="rounded-lg"
      >
        <rect width="120" height="40" rx="6" fill="#000000"/>
        <text x="60" y="14" textAnchor="middle" fill="white" fontSize="6" fontWeight="300">
          Download on the
        </text>
        <text x="60" y="28" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          App Store
        </text>
        <path d="M24 8l-4 7h8l-4-7z M20 16l4 7 4-7h-8z" fill="white"/>
      </svg>
    </a>
  );

  const GooglePlayButton = () => (
    <a
      href="#"
      className="inline-block transition-all duration-200 hover:scale-105 hover:shadow-lg"
      aria-label="Get it on Google Play"
    >
      <svg
        width={variant === 'closing' ? '160' : '120'}
        height={variant === 'closing' ? '48' : '36'}
        viewBox="0 0 120 40"
        className="rounded-lg"
      >
        <rect width="120" height="40" rx="6" fill="#000000"/>
        <text x="60" y="14" textAnchor="middle" fill="white" fontSize="6" fontWeight="300">
          GET IT ON
        </text>
        <text x="60" y="28" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
          Google Play
        </text>
        <polygon points="24,8 28,12 24,16 20,12" fill="#34A853"/>
        <polygon points="28,12 32,8 32,16" fill="#EA4335"/>
        <polygon points="20,12 16,8 16,16" fill="#4285F4"/>
        <polygon points="24,16 28,20 20,20" fill="#FBBC04"/>
      </svg>
    </a>
  );

  const renderStoreButtons = () => {
    if (isIOS) {
      return (
        <>
          <AppStoreButton />
          <GooglePlayButton />
        </>
      );
    } else {
      return (
        <>
          <GooglePlayButton />
          <AppStoreButton />
        </>
      );
    }
  };

  if (variant === 'hero') {
    return (
      <div className={`space-y-4 ${className}`}>
        {showButton && (
          <Button size="lg" href="#download">
            {buttonText}
          </Button>
        )}
        {/* <div className="flex flex-col sm:flex-row gap-3">
          {renderStoreButtons()}
        </div> */}
      </div>
    );
  }

  if (variant === 'closing') {
    return (
      <div className={`text-center space-y-6 ${className}`}>
        {showButton && (
          <Button size="lg" className="text-lg px-12 py-6">
            {buttonText}
          </Button>
        )}
        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {renderStoreButtons()}
        </div> */}
      </div>
    );
  }

  // Default inline variant
  return (
    <div className={`text-center space-y-4 ${className}`}>
      {showButton && (
        <Button size="lg">
          {buttonText}
        </Button>
      )}
      {/* <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        {renderStoreButtons()}
      </div> */}
    </div>
  );
}