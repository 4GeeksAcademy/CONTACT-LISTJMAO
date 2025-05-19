import React, { useState } from "react"
import useGlobalReducer from "..hooks/useGlobalReducer"


const AddContact = () => {

    const { store, dispatch } = useGlobalReducer()
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    })

    return (
        <div>
            <h1>hola</h1>

            name: "",
            phone: "",
            email: "",
            address: "",

        </div>
    )
}

export default AddContact