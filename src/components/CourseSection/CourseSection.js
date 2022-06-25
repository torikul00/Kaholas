import React, { useEffect, useState } from 'react';
import './CourseSection.css'
import CourseSectionUI from './CourseSectionUI';




const CourseSection = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <main className='h-screen w-full p-4'>
            {
                data?.map(data => <CourseSectionUI data={data} key={data.id} />)
            }


        </main>
    );
};

export default CourseSection;