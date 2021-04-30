import React, { Component } from 'react';
import { Form_Body } from './form_components';
import style from "./stylesheets/form.module.css"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            state: "",
            city: "",
            email: "",
            phone: "",
            gender: "",
            occupation: "",
            qualification: "",
            msg: "",
            pincode: "",
            age:""
        };
    }

    //HANDLERS
    firstNameChangeHandler = (e) => {
        let newState = this.state
        newState.firstName = e.target.value
        this.setState(newState)
        console.log(this.state.firstName)
    }
    lastNameChangeHandler = (e) => {
        let newState = this.state
        newState.lastName = e.target.value
        this.setState(newState)
        console.log(this.state.lastName)

    }
    stateChangeHandler = (e) => {
        let newState = this.state
        newState.state = e.target.value
        this.setState(newState)
        console.log(this.state.state)

    }
    cityChangeHandler = (e) => {
        let newState = this.state
        newState.city = e.target.value
        this.setState(newState)
        console.log(this.state.city)

    }
    emailChangeHandler = (e) => {
        let newState = this.state
        newState.email = e.target.value
        this.setState(newState)
        console.log(this.state.email)

    }
    phoneChangeHandler = (e) => {
        if(e.target.value.length<=10){
            let newState = this.state
            newState.phone = e.target.value
            this.setState(newState)
            console.log(this.state.phone)
        }

    }
    genderChangeHandler = (e) => {
        let newState = this.state
        newState.gender = e.target.value
        this.setState(newState)
        console.log(this.state.gender)

    }
    occupationChangeHandler = (e) => {
        let newState = this.state
        newState.occupation = e.target.value
        this.setState(newState)
        console.log(this.state.occupation)
    }
    qualificationChangeHandler = (e) => {
        let newState = this.state
        newState.qualification = e.target.value
        this.setState(newState)
        console.log(this.state.qualification)

    }

    pincodeChangeHandler = (e) => {
        if(e.target.value.length<=6){
            let newState = this.state
            newState.pincode = e.target.value
            this.setState(newState)
            console.log(this.state.pincode)
        }

    }
    msgHandler = (data) => {
        let newState = data
        this.setState(newState)
        console.log(this.state.msg)

    }

    ageChangeHandler=(e)=>{
        if((e.target.value>0 && e.target.value<=100)||(e.target.value=="")){
            let newState = this.state
            newState.age = e.target.value
            this.setState(newState)
            console.log(this.state.age)
        }

    }
    
    emailChangeHandler=(e)=>{
        if((!e.target.value.includes("@")) || !e.target.value.includes(".")){
            let newState=this.state
            newState.msg="Please enter a valid email!"
            this.setState(newState)
        }else{
            let newState=this.state
            newState.msg=""
            this.setState(newState)
        }
    }


    
 
    render() {
        return (
            <div className={style.formComponentOuterDiv}>
                <Form_Body handlers={{
                    firstNameChangeHandler: this.firstNameChangeHandler,
                    lastNameChangeHandler: this.lastNameChangeHandler,
                    stateChangeHandler: this.stateChangeHandler,
                    cityChangeHandler: this.cityChangeHandler,
                    emailChangeHandler: this.emailChangeHandler,
                    phoneChangeHandler: this.phoneChangeHandler,
                    genderChangeHandler: this.genderChangeHandler,
                    occupationChangeHandler: this.occupationChangeHandler,
                    qualificationChangeHandler: this.qualificationChangeHandler,
                    pincodeChangeHandler:this.pincodeChangeHandler,
                    ageChangeHandler:this.ageChangeHandler,
                    submitButtonHandler:this.submitButtonHandler

                }}
                    data={{ msg:this.state.msg,phone:this.state.phone, pincode:this.state.pincode,age:this.state.age}} />
            </div>
        );
    }
}

export default Form;
