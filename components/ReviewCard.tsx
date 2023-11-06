// the customer review card

import Image from 'next/image';
import { star } from '../public/icons';

interface Props {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback }: Props) => {
  // Ensure rating is a number
  const numericRating = Number(rating);
  // Create an array of stars
  const stars = Array(numericRating)
    .fill(0)
    .map((_, index) => (
      <Image
        key={index}
        src={star}
        alt='rating'
        width={24}
        height={24}
        className='object-contain m-0'
      />
    ));

  return (
    <div className='flex justify-center items-center flex-col'>
      <Image
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] '
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        {stars}
      </div>
      <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      <h3 className='mt-1 text-2xl text-center font-bold'>{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
