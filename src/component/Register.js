import React from 'react'
import Navebar from './Navebar'

const Register = () => {
  return (
    <div>
        <Navebar/>

        <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-2">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <label for="">Name</label>
                   <input placeholder="Enter your Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="">Roll Number</label>
                    <input placeholder="Enter Your Roll Number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="">Admission Number</label>
                    <input placeholder="Enter Your Admission Number" className="form-control" type="text"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="">Mobile</label>
                    <input placeholder="Enter Your Mobile Number" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="">College</label>
                    <input placeholder="Enter Your college" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="">Username</label>
                    <input placeholder="Enter your Username" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="">password</label>
                    <input placeholder="Enter Your password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-success">Register</button>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <a className="btn btn-success" href="index.html">Back to login</a>
                </div>
            </div>
         
        </div>
        
    </div>
</div>

</div>
      
  )
}

export default Register