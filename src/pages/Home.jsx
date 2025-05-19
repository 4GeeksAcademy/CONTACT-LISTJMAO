import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ContactCard from "../components/ContactCard.jsx";




export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

		useEffect(() => {
			const fetchContacts = async ()=>{
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/agendas/Abaunza/contacts");
					if(!response.ok){
						throw new Error("HTTP error status: {response status}");
					}
					const data= await response.json()
					dispatch({
						type: "get_contacts", 
						payload: data.contacts
					})


				} catch (error) {
					console.error("Error fetching contacts:", error)

				}




			}
			
			fetchContacts();

	}, [])



	console.log(store.contacts);
	

	return (
		<div className="container text-center mt-5">
			{store.contacts.map((value, index)=>{
				return(
					<ContactCard key={index} contact={value}/>
				)
			}




			
		
		</div>
	);
}; 