const Contacts = () => {
    
  
const Card = (props) => {
    return <div className="card"> 
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="circle-img" src={props.src} alt="avatar_img"/>
        </div>

        <div className="bottom">
            <p className="info">{props.contact}</p>
            <p className="info">{props.email}</p>
        </div>
    </div>
    }


  return (
    <div className="cardPadding">
        <Card 
            name="Lionel Messi" 
            src="https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg" 
            contact="+123 456 789" 
            email="lionel@messi.com" 
        />

        <Card 
            name="Cristiano Ronaldo" 
            src="https://static.independent.co.uk/2021/09/24/22/0c8825065042ef65514483e5a5856d25Y29udGVudHNlYXJjaGFwaSwxNjMyNTgxOTQ4-2.62342572.jpg?width=1200" 
            contact="+123 456 789" 
            email="c@ronaldo.com" 
        />

        <Card 
            name="Ronaldhino" 
            src="https://pbs.twimg.com/media/DxVnbspW0AAXNy2.jpg" 
            contact="+123 456 789" 
            email="ronaldhino@.com" 
        />
    </div>

  )
}

export default Contacts