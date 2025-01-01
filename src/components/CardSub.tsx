import React from "react";

interface CardSubProps {
  title: string;
  price: number;
  description: string;
  buttonText: string;
  isSelected: boolean; // Prop to indicate if the card is selected
  onSelect: () => void; // Callback for when the card is clicked
}

function CardSub({
  title,
  price,
  description,
  buttonText,
  isSelected,
  onSelect,
}: CardSubProps) {
  return (
    <div
      className={`card w-80 h-[26rem] shadow-xl text-center cursor-pointer duration-300 ${
        isSelected ? "bg-black text-white -translate-y-10 max-md:-translate-y-5" : "bg-[#f4f4f5]"
      }`}
      onClick={onSelect}
    >
      <p className={`text-center p-4 pb-10 font-bold ${isSelected ? "text-white" : ""}`}>
        {title}
      </p>
      <h1 className="text-2xl font-bold">
        <span className="text-5xl font-bold">{price}</span> ريال
      </h1>
      <div className="card-body items-center text-center">
        <p className="w-40 p-3">{description}</p>
        <div className="card-actions">
          <button
            className={`btn w-60 text-xl border-none ${
              isSelected ? "bg-[#ad9a4d] text-white" : "bg-black text-white"
            }`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSub;
