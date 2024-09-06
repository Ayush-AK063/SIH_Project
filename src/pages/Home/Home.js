import React from 'react';
import {CarouselTransition} from "../../components/Carousel";
import Contact_agent from '../../components/Contact_agent';
import BodyType from '../../components/BodyType';
import Review from '../../components/Review/Review';



const Home = () => {
  return(
    <div className='flex flex-col '>
      <CarouselTransition />
      <div className='flex text-3xl font-bold py-6 justify-center'>What You Like</div>
      <BodyType />
      <Contact_agent />
      <div>
      {/* <h1 className="text-3xl font-bold text-center my-8">Customer Reviews</h1>
      <Review /> */}
    </div>
      
    </div>
  )
}

export default Home;