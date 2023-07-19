import React, { useState } from 'react'
import Card from './Card'

const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;

    const[likedCourses,setLikedCourses] = useState([]);

    // To Get all the courses in single Array....First we will get 4 arrays and for those arrays we will iterate again to store in single Array
    function getCourses(){
        if(category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach( array =>{
                array.forEach(courseData =>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else
        {
            // main sirf specific category ka data array karung
            return courses[category];
        }
    }

    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getCourses().map( (course) => {
                    return <Card key = {course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses}></Card>
                })
            }
        </div>
    )
}

export default Cards