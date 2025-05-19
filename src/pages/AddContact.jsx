import React, {useState} from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"


const AddContact =()=> {

    const {store, dispatch} = useGlobalReducer()
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    })

    return (
        <div>
            <h1>hola</h1>

            <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputphone" className="form-label">Phone</label>
    <input type="text" className="form-control" id="inputphone" placeholder=""/>
  </div>
  <div className="col-md-6">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"/>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Add</button>
  </div>
</form>



        </div>
    )
}

export default AddContact