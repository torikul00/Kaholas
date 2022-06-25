import React from 'react';
import { AiOutlineQuestionCircle, AiFillStar } from 'react-icons/ai';
import { FaAngleRight, FaShare } from 'react-icons/fa';
import { GiSelfLove } from 'react-icons/gi';
const CourseSectionUI = ({data}) => {
    const {name,description,image_1,image_2,image_3,profile,learners,reviews,class_reviews} = data
    return (
        <div>
            <h1 className='text-5xl leading-snug font-extrabold'>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
            <h3 className='text-xl course'>Multi-Day Course < AiOutlineQuestionCircle className='inline q-icon' /></h3>

            <div className="content-container flex">
                <div className="content w-2/4">
                    <p className='description text-lg py-4	'>
                       {description}
                    </p>
                    <div className='flex items-center'>
                        <img className='profile-image' src={profile} alt="Profile" />
                        <h1 className='name mx-2 text-xl font-semibold'>{name}</h1>
                    </div>
                    <div className="ratings pt-4 flex">
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <p className='review pl-4 '>{reviews} total reviews for this teacher</p>
                    </div>
                    <div className="ratings pt-2 flex">
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <AiFillStar className='rating text-2xl' />
                        <p className='review pl-4'>{class_reviews} reviews for this class</p>
                    </div>
                    <h3 className='text-xl my-2'>Completed by {learners} learners</h3>

                    <div className="buttons">
                        <button className='shedule-button mt-4'>See Class Shedule <FaAngleRight className='inline text-xl' /></button>

                        <button className='save-button mx-8 text-xl'><GiSelfLove className='inline' /> Save</button>
                        <button className='share-button mx-8 text-xl'><FaShare className='inline' /> Share</button>
                    </div>




                </div>
                <div className="images w-2/4 p-4 flex">
                    <div className='image-1 w-2/4 h-full p-2'>
                        <img className='w-full h-full' src={image_1} alt="" />
                    </div>

                    <div className=' w-2/4 h-full'>
                        <div className='image-2 w-full h-2/4 p-2 '>
                            <img className='w-full h-full' src={image_2} alt="" />
                        </div>
                        <div className='image-3 w-full h-2/4 p-2'>
                            <img className='w-full h-full' src={image_3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSectionUI;