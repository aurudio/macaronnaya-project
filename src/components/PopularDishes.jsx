import React from 'react';
import popularDish from '../images/image 97.svg';
import fullStar from '../images/star-fill.svg';
import emptyStar from '../images/star-empty.svg';
import Rating from 'react-rating';
import '../styles/PopularDishes.css';

const PopularDishes = () => {
  const dishes = [
    {
      image: popularDish,
      rating: 3,
      id: 1,
      title: 'паста и ризотто',
      price: 300,
    },

    {
      image: popularDish,
      rating: 5,
      id: 2,
      title: 'паста и ризотто',
      price: 300,
    },

    {
      image: popularDish,
      rating: 5,
      id: 3,
      title: 'паста и ризотто',
      price: 300,
    },

    {
      image: popularDish,
      rating: 3,
      id: 4,
      title: 'паста и ризотто',
      price: 300,
    },

    {
      image: popularDish,
      rating: 4,
      id: 5,
      title: 'паста и ризотто',
      price: 300,
    },
    {
      image: popularDish,
      rating: 4,
      id: 6,
      title: 'паста и ризотто',
      price: 300,
    },
    {
      image: popularDish,
      rating: 4,
      id: 7,
      title: 'паста и ризотто',
      price: 300,
    },
  ];

  return (
    <section className='popular-dishes-section mt-1 mb-20 w-full'>
      <h2 className='popular-dishes__title w-full text-center mb-7 text-5xl font-["Times_New_Roman"] text-my-orange font-bold '>
        Популярные блюда
      </h2>
      <div className='popular-dishes__card-block flex gap-x-8 overflow-x-scroll w-[93%] m-auto justify-between flex-row pb-7 scroll-smooth'>
        {dishes?.map((item) => (
          <div
            className='min-w-[22.6%] h-[355px] mx-px relative flex flex-col items-center justify-center'
            key={item.id}
          >
            <img src={item.image} alt='' className=' w-52 absolute top-0' />
            <div className='rounded-2xl pt-40 flex flex-col justify-center items-center w-full h-5/6 bg-my-light-gray '>
              <h5 className='font-semibold font-["Montserat"] text-xl mb-3 uppercase'>
                {item.title}
              </h5>
              <div className=' w-[122px] flex mb-1'>
                <Rating
                  className=' mr-4'
                  emptySymbol={
                    <img src={emptyStar} className='mr-1' alt='star' />
                  }
                  fullSymbol={
                    <img
                      src={fullStar}
                      className='mr-1 drop-shadow-[-1px_-1px_14px_#fbf187] '
                      alt='popular Dishes'
                    />
                  }
                  initialRating={item.rating}
                  readonly
                />
                <h5 className='popular-dishes__rating-text'>{item.rating}</h5>
              </div>
              <h5 className='popular-dishes__price font-bold font-["Montserat"] uppercase text-base'>
                {item.price} сом
              </h5>
            </div>
            <button className=' font-semibold font-["Montserat"] w-56 rounded-2xl uppercase absolute bottom-2 text-white py-2 px-5 bg-my-orange shadow-[-4px_5px_29px_#de6e4540_,_4px_-4px_39px_#de6e4566] '>
              узнать подробнее
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
