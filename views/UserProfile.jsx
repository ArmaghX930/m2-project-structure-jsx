const React = require("react");
const Layout = require("./Layout");

function UserProfile(props) {
  return (
    <Layout title={`${props.user.username}`} user={props.user}>
      <h2>This is the profile page of the infamous {props.user.username}</h2>
      <main>
        <section>
          <div>
            <img src={props.user.imageUrl} alt="Cannot display image"/>
            <h4>Account Information</h4>
          </div>
          <div>
            
          </div>
        </section>
        <section>

        </section>
      </main>
      <section></section>
    </Layout>);  
}

module.exports = UserProfile;