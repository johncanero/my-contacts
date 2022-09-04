import Detail from "./Detail"
import contacts from "../ContactList"


const Contacts = () => {
    
    // const  Card
    const Card = (props) => {
        return <div className="card"> 
                    <div className="top">
                        {/* <p>{props.id}</p> */}
                        <h2 className="name">{props.name}</h2>
                        <img className="circle-img" src={props.src} alt="avatar_img"/>
                    </div>

                    <div className="bottom">
                        <Detail detailInfo={props.contact} />
                        <Detail detailInfo={props.email} />
                    </div>
                 </div>
     }

    // Map Function
    const createCard = (contact) => {
        return <Card 
            // id={contact.id}
            name={contact.name}
            src={contact.src}
            contact={contact.contact}
            email={contact.email}
        />
    }


  return (
    <div className="cardPadding">
        {/* Map Function */}
        {contacts.map(createCard)}
    </div>

  )
}

export default Contacts