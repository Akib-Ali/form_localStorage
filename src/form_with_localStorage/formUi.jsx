export const FormUi=(props)=>{



    return(
        <div style={{height:"250px" ,width:"200px", border:"2px solid red"}}>
          <p>{props.elem.username}</p>
          <p>{props.elem.gender}</p>
          <p>{props.elem.age}</p>
          <p>{props.elem.position}</p>
          <button style={{border:"2px solid black"}} onClick={(()=> props.handleDelete(props.index))}>Delete</button>
        </div>
    )
}