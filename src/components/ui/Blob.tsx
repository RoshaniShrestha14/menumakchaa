import React from "react";

interface BlobProps {
  color?: string;      
  width?: number;      
  height?: number;      
  hoverAnimate?: boolean; 
}

const Blob: React.FC<BlobProps> = ({
  color = "#FF6F61",
  width = 200,
  height = 200,
  hoverAnimate = false,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`transition-transform duration-300 ${
        hoverAnimate ? "hover:scale-110 hover:rotate-3 cursor-pointer" : ""
      }`}
    >
      <path
        fill={color}
        d="M43.1,-69.6C54.3,-61.3,57.6,-43,60,-27.2C62.4,-11.3,64.9,2.3,61.9,14.6C58.9,26.8,50.4,37.7,40.1,46.1C29.9,54.5,17.9,60.4,5.2,59.4C-7.5,58.4,-15,50.6,-24.1,44.7C-33.2,38.8,-43.8,34.9,-52.6,27.8C-61.3,20.8,-68.2,10.4,-67.5,-0.2C-66.7,-10.8,-58.3,-21.7,-51.8,-33.5C-45.3,-45.3,-40.8,-58,-31.2,-66.8C-21.5,-75.6,-10.8,-80.5,0.8,-81.5C12.5,-82.5,25,-79.6,43.1,-69.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
