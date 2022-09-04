import Profile from '../images/avatarImage2.jpg'

const Avatar = () => {

    // const: Card
    const Card = (props) => {
        return <div> 
            <img className="circle-img2" src={props.src} alt="avatar_img"/>
        </div>
        }


  return (
    <div>
        <Card src={Profile} />
    </div>
  )
}

export default Avatar