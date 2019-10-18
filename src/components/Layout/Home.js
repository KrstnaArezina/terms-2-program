import React, {Component} from 'react';
import {Header, Footer} from "./HeaderFooter"
import Exercises from "../Exercises"
import {exercises, groups} from "../../store";
import {links} from "../../storeLink";

export class Home extends Component {
    state = {
        exercises,
        exercise: {},
        links,
        link: {},
    }

    getExercisesByMuscles(){
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
                const {groups} = exercise

                exercises[groups] = exercises[groups]
                    ? [...exercises[groups], exercise]
                    : [exercise]

                return exercises
            }, {})
        )
    }

    handleCategorySelect = catergory => {
        this.setState({
            catergory
        })
    }

    handleExerciseSelect = id => {
        this.setState(({exercises}) => ({
            exercise: exercises.find(ex => ex.id ===id) }))
        this.setState(({links}) => ({
            link: links.find(ex => ex.id === id)
            })
        )
    }

    render(){
        const exercises = this.getExercisesByMuscles(),
            {catergory, exercise, link} = this.state

        return(
            <nav>
                <Header/>
                <Footer
                    style={{marginTop: 20}}
                    category={catergory}
                    groups={groups}
                    onSelect={this.handleCategorySelect}
                />
                <Exercises
                    exercise={exercise}
                    category={catergory}
                    exercises={exercises}
                    onSelect={this.handleExerciseSelect}
                    link={link}
                />
            </nav>

        )}
}

export default Home;