const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateBooking (props) {
    return(
        <Layout title="New Booking" user={props.user} pageCSS="/stylesheets/space.css">
            <main>
            <h3>Booking Details</h3>
            <div id="booking-preview">
                <p> <span>{props.space.title}</span> </p>
                <p>Provided by: <span>{props.space.providerID.username}</span></p> 
                <p>Address: <span>{props.space.address}</span></p> 
                <p>Contact Info: <span>{props.space.contactInfo}</span></p> 
                <p>Capacity: <span>{props.space.capacity}</span></p> 
                <p>Price: <span>{props.space.pricePerHour}</span>€/hr</p> 
                <p>Price with discount: <span>{props.space.pricePerHour * (1 - props.space.discount)}</span>€/hr</p> 
            </div>
            
            <form action={`/user/space/book/${props.space._id}`} method="POST">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" name="startDate"/>
                <label htmlFor="startTime">Start Time</label>
                <input type="time" name="startTime"/>
            <button type="submit" className="profile-btn">Confirm</button>
            </form>
            <div id="del-acc-btn">
                <a href={`/space/${props.space._id}`}><button className="delete-btn">Cancel</button></a>
            </div>
            
            </main>
        </Layout>
    )
}

module.exports = CreateBooking;