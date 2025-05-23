import React from "react"

const ContactCard = ({contact }) => {



    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://i.pinimg.com/236x/85/31/5e/85315eba6d5d0a4e19b7acdf90f094c1.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-title">{contact.name}</p>
                            <p className="card-text">Phone: {contact.phone}</p>
                            <p className="card-text">Email: {contact.email}</p>
                            <p className="card-text">Address: {contact.address}</p>

                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">edit</button>
                    <button className="btn btn-primary" type="button">delete</button>
                </div>
            </div>

        </div>
    )



}
export default ContactCard