import React, {Component, Fragment} from 'react';
import {Header, Footer} from "./Layout/HeaderFooter"
import Exercises from "./Exercises"
import {muscles, exercises} from "../store";
import Journey from "./Layout/Journey.js"
import CssBaseline from '@material-ui/core/CssBaseline';
import About from "./About/About.js";
import {journeyCB} from "../journeyStore";


export default class extends Component {
    state = {
        step:1,
        exercises,
        exercise: {},
        journeyCB,
    }

    getExercisesByMuscles(){
        return Object.entries(
            this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise

            exercises[muscles] = exercises[muscles]
            ? [...exercises[muscles], exercise]
                : [exercise]

            return exercises
        }, {})
        )
    }

    //Proceed to home page
    home = () => {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    }

    //Go to journey page
    journey = () => {
        const { step } = this.state;
        this.setState({
            step: 2
        });
    }

    //Proceed to about page
    about = () => {
        const { step } = this.state;
        this.setState({
            step: 3
        });
    }

    handleCategorySelect = catergory => {
        this.setState({
            catergory
        })
    }

    handleExerciseSelect = id => {
        this.setState(({exercises}) => ({
            exercise: exercises. find(ex => ex.id ===id)
            }))
    }

    handleExerciseCreate = exercise => {
        this.setState(({exercises}) => ({
            exercises:[
                ...exercises,
                exercise
            ]
        }))
    }

    handleExerciseDelete = id => {
        this.setState(({exercises}) => ({
            exercises: exercises.filter(ex => ex.id !== id)
        }))
    }



    render() {
        const exercises = this.getExercisesByMuscles(),
            {catergory, exercise, step} = this.state

        switch (step) {
            //Home page
            case 1:
                return ( <Fragment >
                        <CssBaseline/>
                        <Header
                            home={this.home}
                            journey={this.journey}
                            about={this.about}
                        />
                        <Footer
                            style={{marginTop: 20}}
                            category={catergory}
                            muscles={muscles}
                            onSelect={this.handleCategorySelect}/>
                        <Exercises
                            exercise={exercise}
                            category={catergory}
                            exercises={exercises}
                            onSelect={this.handleExerciseSelect}
                            onDelete={this.handleExerciseDelete}
                        />
                    </Fragment>
                )
            //
            case 2:
                return (
                    <Fragment>
                        <CssBaseline/>
                        <Header
                            home={this.home}
                            journey={this.journey}
                            about={this.about}
                        />
                        <Journey
                            muscles={muscles}
                            journeyCB={journeyCB}
                        />
                    </Fragment>

                )
            case 3:
                return (
                    <Fragment>
                        <CssBaseline/>
                    <About/>
                    <Header
                        home={this.home}
                        journey={this.journey}
                        about={this.about}
                    />
                    </Fragment>

                )
        }
    }
}