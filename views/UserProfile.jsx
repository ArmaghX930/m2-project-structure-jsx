const React = require("react");
const Layout = require("./Layout");
const BookingCard = require("./components/BookingCard");

function UserProfile(props) {
  return (
    <Layout title={props.user.username} user={props.user} pageCSS="/stylesheets/profile.css">
      <h2>{props.user.username}</h2>
      <main>
        <section class="profile-info">
        {props.user.imageUrl ? <img className="profile-pic" src={props.user.imageUrl}/> : <img className="profile-pic" src="/images/profile-image-placeholder.png"/>}
        <article id="profile-article">
          <h3>Account Information</h3>
          <table>
              <thead>
                <th>Username</th>
                <th>{props.user.username}</th>
              </thead>
              <tbody>
                <tr>
                  <td>Date of Birth</td>
                  <td>{props.user.dateOfBirth}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{props.user.phoneNumber}</td>
                </tr>
              </tbody>
          </table>
          <div id="btn-div">            
            <a href="/user/edit"><button className="profile-btn">Edit Account</button></a>
          </div>
        </article>
        <aside>
          <h3>Your Listed Spaces</h3>
            { props.user.isProvider
              ? <div>
                  {props.user.spaces.map((space, i) => {
                    return(  
                      <a href={`/space/${space._id}`}>
                        <div key={i} className="space-shortcut">
                          <img width="80px" src={space.imageUrl} />
                            <h6> {space.title} </h6>
                        </div>
                    </a>)
                  })}
                  <a href="/user/space/add"><div className="become-provider">Add Another Space</div></a>
                </div>  
              : ( <div>
                    <h5>You Haven't Listed Any Spaces Yet</h5>
                    <a href="/user/space/add"><div className="become-provider">Become a Provider</div></a>
                </div>
                 )
            }
        </aside>
        </section>
            
        <section>
            <h3>Your Bookings</h3>
            <div id="booking-div">
              {props.user.bookings[0]
              ? props.user.bookings.map((booking, i) => {
                return (
                  <BookingCard key={i} booking={booking}></BookingCard>
                )
              })
              : <h5>You Have Not Confirmed Any Bookings Yet</h5>
            }
            </div>
        </section>
        <aside id="del-acc-btn"><a href="/user/delete"><button className="delete-btn">Delete Account</button></a></aside>
      </main>
    </Layout>);  
}

module.exports = UserProfile;