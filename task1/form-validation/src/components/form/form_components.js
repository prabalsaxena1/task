import React, { Component } from 'react';
import style from "./stylesheets/form.module.css"
class Form_Body extends Component {

    render() {
        return (
            <div className={style.formBody}>


                <h1>Please fill the details</h1>


                <div className={style.name}>
                    <input type="text" placeholder="First Name" className={style.firstName} onChange={(e) => this.props.handlers.firstNameChangeHandler(e)} />
                    <input type="text" placeholder="Last Name" className={style.lastName} onChange={(e) => this.props.handlers.lastNameChangeHandler(e)} />
                    <input type="number" placeholder="Age (0<Age<=100)" value={this.props.data.age} className={style.age} onChange={(e)=>this.props.handlers.ageChangeHandler(e)} />

                </div>


                <div className={style.stateCity}>
                    <input type="text" placeholder="State" className={style.state} onChange={(e) => this.props.handlers.stateChangeHandler(e)} />
                    <input type="text" placeholder="City" className={style.city} onChange={(e) => this.props.handlers.cityChangeHandler(e)} />
                    <input type="number" placeholder="pin code" value={this.props.data.pincode} onChange={(e) => this.props.handlers.pincodeChangeHandler(e)} className={style.Pincode} />
                </div>


                <div className={style.emailContact}>
                    <input type="email" placeholder="email" className={style.email} onChange={(e) => this.props.handlers.emailChangeHandler(e)} />
                    <p className={style.msg}>{this.props.data.msg}</p>

                    <input type="number" value={this.props.data.phone} placeholder="Phone No." className={style.contact} onChange={(e) => this.props.handlers.phoneChangeHandler(e)} />
                </div>


                <div className={style.gender}>
                    <table>
                        <tbody>
                            <tr>
                                <td><input type="radio" value="Male" name="gender" onChange={(e) => this.props.handlers.genderChangeHandler(e)} /></td>
                                <td>Male</td>
                                <td><input type="radio" value="Female" name="gender" onChange={(e) => this.props.handlers.genderChangeHandler(e)} /></td>
                                <td>Female</td>
                                <td> <input type="radio" value="Other" name="gender" onChange={(e) => this.props.handlers.genderChangeHandler(e)} /></td>
                                <td>Other</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


                <div className={style.occuQuali}>
                    <select defaultValue={"Occupation"} name="Occupation" className={style.occu} onChange={(e) => this.props.handlers.occupationChangeHandler(e)}>
                        <option disabled="disabled">Occupation </option>
                        <option value="Software Engineer" >Software Engineer</option>
                        <option value="Backend Developer">Backend Developer</option>
                        <option value="Fronend Developer">Frontend Developer</option>
                        <option value="Full Stack Developer">Full Stack Developer</option>
                    </select>

                    <select name="Qualification" defaultValue={"Qualification"} className={style.occu} onChange={(e) => this.props.handlers.qualificationChangeHandler(e)}>
                        <option selected={true} disabled="disabled">Qualification </option>
                        <option value="B.Tech(Computer Science)">B.Tech(Computer Science)</option>
                        <option value="B.Sc">B.Sc</option>
                        <option value="B.Com">B.Com</option>
                        <option value="BBA">BBA</option>
                    </select>
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </div>

        );
    }
}


export { Form_Body };
