export const FormInput=(props)=>{


    const handleChange=(e)=>{
       const name= e.target.name;
       const value = e.target.value;
      
       props.setinputvalue({...props.inputvalue, [name]: value})

    }

    


return(
    <div>
        <h1>User Form </h1>


        <form>
            Name:{}
            <input type="text" placeholder="Enter Name"  autoComplete="off" name="username" value={props.inputvalue.username} onChange={handleChange}/>  <br></br> <br></br>

            Gender:{}
            <input type="text" placeholder="Enter Gender" name="gender" value={props.inputvalue.gender} onChange={handleChange}/>  <br></br> <br></br>

            Position:{}
            <input type="text" placeholder="Enter Position in Company"  name="position" value={props.inputvalue.position} onChange={handleChange}/> <br></br><br></br>
            Age:{}
            <input type="number" placeholder="Enter Age"  name="age" value={props.inputvalue.age}  onChange={handleChange}/> <br></br> <br></br>


            <button style={{color:"white", backgroundColor:"black"}} onClick={props. handleSubmit}>Submit</button>

            
        </form>
    </div>
)
}