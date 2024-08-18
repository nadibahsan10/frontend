import React from 'react'
import Filter from '../Component/Filter';   
import Card from '../Component/Card';

const category1=["CSE", "BBA", "EEE"]
const category2=["2024", "2020", "2021"]
const category3=["Summer", "Fall", "Spring"]

function MainQuestionBank() {
    return (
        <div>
            <Filter name="Department" category={category1}/>
            <Filter name="Year" category={category2}/>
            <Filter name="Trimester" category={category3}/>
            <Card />
        </div>
    )
}

export default MainQuestionBank;