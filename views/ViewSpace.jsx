const React = require("react");
const Layout = require("./Layout");

function ViewSpace (props) {
    return(
        <Layout title={props.space.title} user={props.user ? props.user : ""}>
            <main>
                <div>
                    <h2>{props.space.title}</h2>
                    <h3> {props.space.welcomePhrase} </h3>
                </div>
                <section>
                    {props.space.availToday
                    ?   <div>
                            <h4>Available Today</h4>
                        </div>
                    : null
                    }
                    <aside>
                        <p>Provided by {props.space.providerID.username}</p>
                        <p>Contact Information:</p>
                        <p>{props.space.contactInfo}</p>
                        <p> Capacity: </p>{props.space.capacity === 1 ? 
                            <p> {props.space.capacity} person</p>
                            : <p> {props.space.capacity} people</p>
                        }
                        <p> Price: {props.space.pricePerHour}€ per hour </p>
                        <p> Current discount: {props.space.discount * 100}% </p>
                        <p> Price with discount: {props.space.pricePerHour * (1 - props.space.discount)}€ per hour</p>
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
                        {(props.space.providerID._id == props.user._id)
                        ?  ( <div> 
                                <a href={`/user/space/edit/${props.space._id}`}><div>EDIT SPACE</div></a> 
                                <a href={`/user/space/delete/${props.space._id}`}><div>DELETE SPACE</div></a>
                            </div> )
                        : props.user 
                        ? (<div> 
                            <a href={`/user/space/book/${props.space._id}`}><div>BOOK SPACE</div></a>
                        </div>)
                        : (<div> 
                            <a href={`/auth/`}><div>BOOK SPACE</div></a>
                        </div>)
                        }
                    </aside>
                    <div>
                        <img src={props.space.imageUrl}></img>
                    </div>
                </section>
                <h3> {props.space.address} </h3>
                <h4> {props.space.city} </h4>
            </main>

        </Layout>
    )
}


module.exports = ViewSpace;
