const React = require("react");
const Layout = require("./Layout");

function ViewSpace (props) {
    return(
        <Layout title={props.space.title} user={props.user ? props.user : ""} pageCSS="/stylesheets/space.css">
            <main>
                <div>
                    <h1>{props.space.title}</h1>
                    <h1> {props.space.welcomePhrase} </h1>
                </div>
                <section>
                    <aside>
                        <p>Provided by {props.space.providerID.username}</p>
                        <p>Contact Information: <span>{props.space.contactInfo}</span></p> 
                        <p> Capacity: {props.space.capacity === 1 ? 
                            <span>{props.space.capacity} person</span> 
                            : <span>{props.space.capacity} people</span> 
                        }</p> 
                        <p> Price: <span>{props.space.pricePerHour}€ per hour</span></p>
                        <p> Current discount: <span>{props.space.discount * 100}%</span></p> 
                        <p> Price with discount: <span>{props.space.pricePerHour * (1 - props.space.discount)}€ per hour</span></p>
                        <p> Amenities: </p>
                        <ul>
                            { props.space.amenities[0]
                            ? props.space.amenities.map((amenity, i) => {
                                return(
                                    <li key={i}>{amenity}</li>
                                )
                            })
                            : <li>No amenities specified by the Provider</li>
                            }
                        </ul>
                        {(!props.user)
                        ?  <a href={`/auth/`}><button className="profile-btn">Book Space</button ></a>
                        : props.space.providerID._id == props.user._id
                        ? <a href={`/user/space/edit/${props.space._id}`}><button className="profile-btn">Edit Space</button></a>
                        : <a href={`/user/space/book/${props.space._id}`}><button className="profile-btn" >Book Space</button></a>}
                    </aside>
                    <div>
                        {props.space.availToday
                            ?   <div class="avail-today">
                                    <span>Available Today</span>
                                </div>
                            : null
                            }
                            <img src={props.space.imageUrl}></img>
                    </div>
                </section>
                <h3> {props.space.address} </h3>
                <h4> {props.space.city} </h4>
                { !props.user
                ? null
                : (props.space.providerID._id == props.user._id)
                ? (<aside id="del-acc-btn"><a href={`/user/space/delete/${props.space._id}`}><button className="delete-btn">Delete Space</button></a></aside>)
                : null }
            </main>

        </Layout>
    )
}


module.exports = ViewSpace;
