const React = require("react");
const Layout = require("./Layout");

function UserProfileEdit(props) {
  return (
    <Layout title={`${props.user.username}. Edit Profile`} user={props.user}>
        <img src={props.user.imageUrl} alt="Cannot display image"/> <br/>
        
        <h2>Update Your Profile Info</h2>
        <form action="/user/edit" method="POST">
            <label htmlFor="imageUrl">Upload New Photo </label> <br/>
            <input type="text" name="imageUrl"/> <br/>
            <label htmlFor="username">Username </label>
            <input type="text" name="username" value={props.user.username}/> <br/>
            <label htmlFor="dateOfBirth">Date of Birth </label>
            {props.user.dateOfBirth 
            ? <input type="date" placeholder="dd-mm-yyyy" name="dateOfBirth" value={props.user.date}/>
            : <input type="date" placeholder="dd-mm-yyyy" name="dateOfBirth"/>} <br/>

            <label htmlFor="phoneNumber">Phone Number </label>
            {props.user.phoneNumber 
            ? <input type="text" name="phoneNumber" value={props.user.phoneNumber}/>
            : <input type="text" name="phoneNumber"/>} <br/>
            
            <button type="submit">Save Changes</button>
        </form>
    </Layout>);  
}

module.exports = UserProfileEdit;