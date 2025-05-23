import React, {useState} from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useNavigate } from "react-router-dom"


const editContact =()=> {

    const navigate = useNavigate()
    const {store, dispatch} = useGlobalReducer()
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    })

    const formChange =(e)=>{
      setForm({...form, [e.target.name]: e.target.value})
    }


    const FormSubmit= (e) =>{
      e.preventDefault();

      if(!form.name || !form.address || !form.phone || !form.email){
        alert("please fill out all fields before saving")
        return
      }

      fetch("https://playground.4geeks.com/contact/agendas/Abaunza/contacts/{contact_id}", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form)
      })
       .then((response)=>{
        if(!response.ok){
          throw new Error("Failed to create contact")
        }
        return response.json()
      })
      .then((editContact)=>{
        dispatch({
          type:"EDIT_CONTACT",
          payload:editContact
        })
        navigate("/")
      })
      .catch((error)=> console.error("Error Editing Contact:", error))
    }

    return (
        <div className="container" >
            <h1>Fill the information, please.</h1>

            <form className="row g-3" onSubmit={FormSubmit}>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" placeholder="uniqueandspecial@some.com" name="email" value={form.email} onChange={formChange}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={form.address} onChange={formChange}/>
  </div>
  <div className="col-12">
    <label htmlFor="inputphone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="inputphone" placeholder="Introduce your phone number" name="phone" value={form.phone} onChange={formChange}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" placeholder="My name is..." name="name" value={form.name} onChange={formChange}/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Edit</button>
  </div>
</form>



        </div>
    )
}

export default editContact