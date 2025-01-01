import React from "react";

// Define the props interface
interface OfferCardProps {
  title: string;
  description: string;
  SvgIcon: React.ReactNode; // Accepts an SVG React component
}

function OfferCard({ title, description, SvgIcon }: OfferCardProps) {
  return (
<>
  <div className="card w-full shadow-xl rounded-lg pt-10">
    <div className="flex flex-col items-start space-y-4">
      <div className="w-12 h-12">
        {SvgIcon}
      </div>
      <h2 className="card-title text-white text-xl font-bold text-start w-60 max-md:w-96 max-sm:w-full max-md:text-2xl max-sm:text-3xl">{title}</h2>
      <p className="text-[#fafafa]  text-start lg:w-72 md:w-40 opacity-70 max-md:w-96 max-sm:w-full text-sm max-md:text-2xl max-sm:text-lg">{description}</p>
    </div>
  </div>
</>

  
  );
}

export default OfferCard;
