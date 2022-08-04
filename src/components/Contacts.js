import Detail from "./Detail"
import ContactList from '../ContactList'
import contacts from "../ContactList"


const Contacts = () => {
    
  
const Card = (props) => {
    return <div className="card"> 
        <div className="top">
            <p>{props.id}</p>
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
        id={contact.id}
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




        {/* (SECOND METHOD) */}
        {/* <Card 
            name={ContactList[0].name}
            src={ContactList[0].src}
            contact={ContactList[0].contact}
            email={ContactList[0].email}
        />

        <Card 
            name={ContactList[1].name}
            src={ContactList[1].src}
            contact={ContactList[1].contact}
            email={ContactList[1].email}
        />

        <Card 
            name={ContactList[2].name}
            src={ContactList[2].src}
            contact={ContactList[2].contact}
            email={ContactList[2].email}
        />  */}




        
        {/* (FIRST METHOD) */}
        {/* <Card 
            name="Lionel Messi" 
            src="https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg" 
            contact="+123 456 789" 
            email="lionel@messi.com" 
        />

        <Card 
            name="Cristiano Ronaldo" 
            src="https://static.independent.co.uk/2021/09/24/22/ 0c8825065042ef65514483e5a5856d25Y29udGVudHNlYXJjaGFwaSwxNjMyNTgxOTQ4-2.62342572.jpg?width=1200" 
            contact="+123 456 789" 
            email="c@ronaldo.com" 
        />

        <Card 
            name="Ronaldhino" 
            src="https://pbs.twimg.com/media/DxVnbspW0AAXNy2.jpg" 
            contact="+123 456 789" 
            email="ronaldhino@.com" 
        /> */}
    </div>

  )
}

export default Contacts