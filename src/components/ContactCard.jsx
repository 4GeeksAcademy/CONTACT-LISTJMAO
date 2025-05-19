import React from "react"

const ContactCard = ({contact }) => {



    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.citypng.com/public/uploads/preview/png-round-blue-contact-user-profile-icon-701751694975293fcgzulxp2k.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-title">{contact.name}</p>
                            <p className="card-text">{contact.phone}</p>
                            <p className="card-text">{contact.email}</p>
                            <p className="card-text">{contact.address}</p>

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