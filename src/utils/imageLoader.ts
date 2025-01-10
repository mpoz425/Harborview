type ImageQuality = {
  mobile: number;
  desktop: number;
};

export const getImageQuality = (path: string): ImageQuality => {
  // Higher quality for hero and profile images
  if (path.includes('hero.jpg') || path.includes('murray.jpg')) {
    return {
      mobile: 80,
      desktop: 90
    };
  }
  
  // Medium quality for service and about images
  if (path.includes('services.jpg') || path.includes('about.jpg')) {
    return {
      mobile: 75,
      desktop: 85
    };
  }
  
  // Lower quality for smaller images
  return {
    mobile: 70,
    desktop: 80
  };
};

export const getImageSize = (path: string) => {
  if (path.includes('hero.jpg')) {
    return {
      mobile: { width: 640, height: 800 },
      desktop: { width: 1920, height: 1080 }
    };
  }
  
  // Default sizes for other images
  return {
    mobile: { width: 400, height: 400 },
    desktop: { width: 800, height: 800 }
  };
}; 