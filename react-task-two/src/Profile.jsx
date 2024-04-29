import PersonalInfo from "./PersonalInfo"
import Email from "./Email"
import Name from "./Name"
import Address from "./Address"

function Profile(){
    let name="Name : Kamal Mustafayev";
    let address="Adress : Baku seheri,Sacuncu rayonu";
    let email="Email : trashbox410@gmail.com";
    let personalInfo="I'm learning React.js!"

    return(
        <>
        <div className="person-info">
        <Name name={name}/>
        <Email email={email}/>
        <Address address={address}/>
        <PersonalInfo personalInfo={personalInfo}/>
        </div>
       
        </>
    )
}

export default Profile