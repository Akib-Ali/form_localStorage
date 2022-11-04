import { useEffect, useState } from "react"
import { FormInput } from "./formInput"
import { FormUi } from "./formUi"

export const FormMain=()=>{

    const [inputvalue,setinputvalue]= useState({
        username:"",
        gender:"",
        position:"",
        age:""
    })


    const [storedata,setstoredata]= useState(getLocalStore())


    // console.log(inputvalue)


    const handleSubmit=(e)=>{
        e.preventDefault()
        setstoredata([...storedata,inputvalue ])

        setinputvalue({username:"", gender:"", position:"", age:""})

        



    }
    console.log(storedata)


    const handleDelete=(id)=>{
        let updatedlist = storedata.filter((elem,index)=>{

            return index !== id
        })
        setstoredata(updatedlist)


    }


    useEffect(()=>{
        localStorage.setItem("detail",JSON.stringify(storedata))


    },[storedata])





    return(
        <div>
            <FormInput 
            inputvalue={inputvalue}
            setinputvalue={setinputvalue}
            handleSubmit={handleSubmit}
            />

            
            <div style={{display:"flex" , gap:"30px"}}>
            {storedata.map((elem,index)=>{
                return(
                    
                    <FormUi key={index}
                            id= {index}
                            index={index}
                            elem={elem}
                            handleDelete={handleDelete}

                    />

            
                )
            })}
            </div>
        </div>
    )
}




const getLocalStore=()=>{
    let list = localStorage.getItem("detail")

    if(list){
        return JSON.parse(localStorage.getItem("detail"))

    }

}