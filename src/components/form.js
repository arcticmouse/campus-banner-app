import React from "react";
import { connect } from "react-redux";
import moment from 'moment'
import ReCAPTCHA from 'react-google-recaptcha'
import { setName,
         setEmail,
         setDepartment,
         setAltName,
         setAltEmail,
         setError,
         setRecaptcha,
         postForm } from "./../actions/formAction"

/*
name: undefined,
email: undefined,
department: undefined,
alt_name: undefined,
alt_email: undefined,
items: [],
start: undefined,
end: undefined,
error: null,
mailSent: false
*/

class BannerForm extends React.Component {
  
  constructor() {
    super()
    this.state = {
       nameErr: 'good',
       emailErr: 'good',
       deptErr: 'good',
       altNameErr: 'good',
       altEmailErr: 'good',
       formErr: 'no-err',
       noShow: false,
     }
  }

  submitted = _ => {
    if(this.props.success) {return 'Form submitted successfully. If you do not receive an email with your order within the next hour, please email campusbanners@berkeley.edu'}
    if(this.props.error) {return 'Form submission was not successful. Please screenshot your order screen and email it to campusbanners@berkeley.edu'}
  }

  recap = (value) => {
    if (value === null) { this.props.setRecaptcha(false) }
    else this.props.setRecaptcha(true) 
  }

  onNameBlur = (e) => {
    if(e.target.value.length > 5) {
      if(this.state.nameErr != 'good') this.setState({nameErr: 'good'})
      this.props.setName(e.target.value)
    } else {
      if(this.state.nameErr != 'error') this.setState({nameErr: 'error'})
    }   
  }

  onEmailBlur = (e) => {
    if(e.target.value.length > 0 && e.target.value.toLowerCase().indexOf('@berkeley.edu') !== -1) {      
      if(this.state.emailErr != 'good') this.setState({emailErr: 'good'})      
      this.props.setEmail(e.target.value)
    } else {
      if(this.state.emailErr != 'error') this.setState({emailErr: 'error'})
    }
  }  

  onDeptBlur = (e) => {
    if(e.target.value.length > 5) {
      if(this.state.deptErr != 'good') this.setState({deptErr: 'good'})      
      this.props.setDepartment(e.target.value)
    } else {
      if(this.state.deptErr != 'error') this.setState({deptErr: 'error'})
    }
  }  

  onAltNameBlur = (e) => {
    if(e.target.value.length > 5) {
      if(this.state.altNameErr != 'good') this.setState({altNameErr: 'good'})
      this.props.setAltName(e.target.value)
    } else {
      if(this.state.altNameErr != 'error') this.setState({altNameErr: 'error'})
    }   
  }

  onAltEmailBlur = (e) => {
    if(e.target.value.length > 0 && e.target.value.toLowerCase().indexOf('@berkeley.edu') !== -1) {   
      if(this.state.altEmailErr != 'good') this.setState({altEmailErr: 'good'})      
      this.props.setAltEmail(e.target.value)
    } else {
      if(this.state.altEmailErr != 'error') this.setState({altEmailErr: 'error'})
    }
  }  

  onNoShowBlur = (e) => {
    if(e.target.value.length > 0) {
      this.setState({noShow: true})
    } else this.setState({noShow: false})
  } 

  handleSubmit = (e) => {
    e.preventDefault()

    let q = false
    for(let[k, v] of Object.entries(this.state)) {
      if(v == 'error') q = true
    }

    if(
      this.props.name && 
      this.props.email &&
      this.props.department && 
      this.props.alt_name && 
      this.props.alt_email &&
      this.props.e_start &&
      this.props.e_end &&
      this.props.recaptcha &&
      !q &&
      !this.state.noShow 
    ) {
      if(this.state.formErr != 'no-err') this.setState({formErr: 'no-err'}) 

      let sel_list = []
      this.props.markers.forEach(marker=> { 
        if(marker.sel && marker.avail) {
          let m = [marker.num + ' - ' + marker.name, marker.img]
          sel_list.push(m) 
        }
      })

      let rsvp = [
        this.props.name, 
        this.props.email, 
        this.props.department, 
        this.props.alt_name, 
        this.props.alt_email, 
        sel_list, 
        this.props.e_start, 
        this.props.e_end
      ]
      this.props.postForm(rsvp)
    } else { 
      if(this.state.formErr != 'has-err') this.setState({formErr: 'has-err'})  
    }
  }

  render() {
    const { markers, start, end } = this.props;

    return (
        <form onSubmit={this.handleSubmit}>
            <h2>Submission Form</h2>
            <div className="error">{this.props.error}</div>
            <h3>Confirm this info is correct. If it is not, make new selections in the section above.</h3>

            <div className="markers">
              <label>
              Selected Markers:
              <select size="10">
                  {this.props.markers.map(marker=> { if(marker.sel && marker.avail) return (<option value={marker.name} key={marker.id}>{marker.num} - {marker.name}</option>) })}
              </select>
              </label>
            </div>

            <div className="dates">
              <label>Start Date:</label><div className="date">{this.props.e_start}</div>

              <label>End Date:</label><div className="date">{this.props.e_end}</div>
            </div>

            <p><span class="star">*</span>All below fields required</p> 
            <div className="primary">
              <label className={this.state.nameErr}>
              <span class="star">*</span>Name:
              <input onBlur={this.onNameBlur} />
              <div className="notice">Please input a full name, longer than 5 characters</div>
              </label>

              <label className={this.state.emailErr}>
              <span class="star">*</span>Email:
              <input onBlur={this.onEmailBlur} />
              <div className="notice">Please input a valid bCal email address</div>
              </label>

              <label className={this.state.deptErr}>
              <span class="star">*</span>Department:
              <input onBlur={this.onDeptBlur} />
              <div className="notice">Please input a department name, longer than 5 characters</div>
              </label>
            </div>

            <div className="alternate">
              <label className={this.state.altNameErr}>
              <span class="star">*</span>Alternate Contact Name:
              <input onBlur={this.onAltNameBlur} />
              <div className="notice">Please input a full name, longer than 5 characters</div>
              </label>

              <label className={this.state.altEmailErr}>
              <span class="star">*</span>Alternate Contact Email:
              <input onBlur={this.onAltEmailBlur} />
              <div className="notice">Please input a valid bCal email address</div>
              </label>

              <label className="no-show" aria-hidden="true">
              <input onBlur={this.onNoShowBlur} />
              </label>
            </div>

            <div className="recap">
              <ReCAPTCHA
                sitekey="6Le75cgUAAAAAG7na3_PrNAGnmvM0RkbQcnI0kWB"
                onChange={this.recap}
              />
            </div>

            <div className={this.state.formErr}>Please fix errors in form, then re-submit</div>

            <div className="submitted">{this.submitted()}</div>
          
            <input className="submit" type="submit" value="Submit" />
        </form>
    )
  }
}    

const mapStateToProps = state => ({
    markers: state.markers.items,
    e_start: moment(state.events.start).format('MM/DD/YY'),
    e_end: moment(state.events.end).format('MM/DD/YY'),

    name: state.form.name,
    email: state.form.email,
    department: state.form.department,
    alt_name: state.form.alt_name,
    alt_email: state.form.alt_email,
    recaptcha: state.form.recaptcha,
    success: state.form.success,
    error: state.form.error
 });

 const mapDispatchToProps = dispatch => {
    return {
        setName: (name) => dispatch(setName(name)),
        setEmail: (email) => dispatch(setEmail(email)),
        setDepartment: (dept) => dispatch(setDepartment(dept)),
        setAltName: (name) => dispatch(setAltName(name)),
        setAltEmail: (email) => dispatch(setAltEmail(email)),  
        setError: (error) => dispatch(setError(error)), 
        setRecaptcha: (recaptcha) => dispatch(setRecaptcha(recaptcha)),     
        postForm: (rsvp) => dispatch(postForm(rsvp))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(BannerForm);