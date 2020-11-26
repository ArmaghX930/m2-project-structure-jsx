const React = require("react");
const Layout = require("./Layout");

function UserProfileEdit(props) {
  return (
    <Layout title={`${props.user.username}. Edit Profile`} user={props.user} pageCSS="/stylesheets/profile.css">
        <h2>Update Your Profile Info</h2>
        <main className="profile-info">
            {props.user.imageUrl ? <img className="profile-pic" src={props.user.imageUrl}/> : <img className="profile-pic" src="/images/profile-image-placeholder.png"/>}
                
                <form action="/user/edit" method="POST" encType="multipart/form-data">
                    <label htmlFor="imageUrl">Update Photo </label> 
                    <input type="file" name="imageUrl" defaultValue={props.user.imageUrl}/> <br/>
                    <label htmlFor="username">Username </label>
                    <input type="text" name="username" value={props.user.username}/> <br/>
                    <label htmlFor="dateOfBirth">Date of Birth </label>
                    
                    {props.user.dateOfBirth 
                    ? <input type="date" placeholder="dd-mm-yyyy" name="dateOfBirth" value={props.user.dateOfBirth}/>
                    : <input type="date" placeholder="dd-mm-yyyy" name="dateOfBirth"/>} <br/>
        
                    <label htmlFor="phoneNumber">Phone Number </label>
                    {props.user.phoneNumber 
                    ? <input type="text" name="phoneNumber" value={props.user.phoneNumber}/>
                    : <input type="text" name="phoneNumber"/>} <br/>
                    
                    <button type="submit" className="profile-btn">Save Changes</button>
                </form>
        </main>
    </Layout>);  
}

module.exports = UserProfileEdit;