const React = require("react");
const Layout = require("./Layout");
const BookingCard = require("./components/BookingCard");

function UserProfile(props) {
  return (
    <Layout title={`${props.user.username}`} user={props.user}>
      <h2>This is the profile page of the infamous {props.user.username}</h2>
      <main>
        <section>
          <article>
            <div>
              <img src={props.user.imageUrl} alt="Cannot display image"/>
            </div>
            <h4>Account Information</h4>
            <table>
                <thead>
                  <th>Your Account Info</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Username</td>
                    <td>{props.user.username}</td>
                  </tr>
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
            <div>
              <a href="/user/edit"><div>EDIT ACCOUNT</div></a>
              <a href="/user/delete"><div>DELETE ACCOUNT</div></a>
            </div>
          </article>
          <aside>
            <h4>Your Listed Spaces</h4>
            { props.user.isProvider
              ? <div>
                  {props.user.spaces.map((space, i) => {
                    return(<div key={i}>
                      <img width="40px" src={space.imageUrl[0]} />
                        <a href={`/space/${space._id}`}><h6> {space.title} </h6></a>
                    </div>)
                  })}
                  <a href="/user/space/add"><div>Add Another Space</div></a>
                </div>  
              : ( <div>
                    <h5>You Haven't Listed Any Spaces Yet</h5>
                    <a href="/user/space/add"><div>Become a Provider</div></a>
                </div>
                 )
            }
          </aside>
        </section>
            
        <section>
            <h4>Your Bookings</h4>
            <div>
              {props.user.bookings
              ? props.user.bookings.map((booking, i) => {
                return (
                  <BookingCard key={i} booking={booking}></BookingCard>
                )
              })
              : <h2>You Have Not Confirmed Any Bookings Yet</h2>
            }
            </div>
        </section>
      </main>
    </Layout>);  
}

module.exports = UserProfile;