import React, { useState } from 'react'

const Student = () => {
    var[name,setName]=useState("Rahul")
    var[Age,setAge]=useState("32")
    var[college,setCollege]=useState("mzc")
    const changeName =() =>{
        setName(name='reny')
        setAge(Age='22')
        setCollege(college='Stas')
    }

  return (

      <div>
       

 <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12">
            <div className="row">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6  ">
                    <label for="" className="form-label">Name</label><br/>
                    <label for="" className="form-label">{name}</label>

                    
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col xxl-6 ">
                   <label for="" className="form-label">Age</label><br/>
                   <label for="" className="form-label">{Age}</label>
                 
                
                    </div>
            
            
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col xxl-12 ">
                        <label for="" className="form-label">college</label><br/>
                        <label for="" className="form-label">{college}</label><br/>
                        <button onClick={changeName}  className="btn btn-success">change</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> 

      </div>
      
    
  )
}

export default Student