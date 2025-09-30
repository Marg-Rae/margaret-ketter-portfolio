// This is a placeholder image component that generates placeholder images
// In production, replace with actual images

const PlaceholderImage = ({ width = 400, height = 300, text = "Placeholder" }: { width?: number; height?: number; text?: string }) => {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#6b7280" font-family="Arial, sans-serif" font-size="16">${text}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svgContent)}`;
};

export default PlaceholderImage;