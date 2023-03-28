import { ReviewCardType } from "@/types";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = ({ comment, rating }: ReviewCardType) => {
  return (
    <div className="w-full p-4 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-20">
      <div>
        {rating == 1 ? (
          <AiFillStar className="text-[orange] text-lg" />
        ) : rating == 2 ? (
          <div className="flex gap-1">
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
          </div>
        ) : rating == 3 ? (
          <div className="flex gap-1">
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
          </div>
        ) : rating == 4 ? (
          <div className="flex gap-1">
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
          </div>
        ) : rating == 5 ? (
          <div className="flex gap-1">
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
            <AiFillStar className="text-[orange] text-lg" />
          </div>
        ) : null}
      </div>
      <div className="text-input-grey">{comment}</div>
    </div>
  );
};

export default ReviewCard;
