import React from "react";

import student from '../../data/students'

export default function StudentList (props){

    let studentsLi = student.map(student=>{

        return (

            <li key={student.id}>
                {student.id}) {student.name} ► {student.grade}
            </li>

        )

    })

    return(

        <div>

            <ul style={{listStyle: 'none'}}>
                {studentsLi}
            </ul>

        </div>

    )

}