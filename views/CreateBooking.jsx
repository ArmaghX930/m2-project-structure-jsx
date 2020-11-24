const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateBooking (props) {
    return(
        <Layout title="New Booking" user={props.user}>
            <h3>Booking Details</h3>
            <p>{props.space.title}</p>
            <p>Provided by: {props.space.providerID.username}</p>
            <p>Address: {props.space.address}</p>
            <p>Contact Info: {props.space.contactInfo}</p>
            <p>Capacity: {props.space.capacity}</p>
            <p>Price: {props.space.pricePerHour}€/hr</p>
            <p>Price with discount: {props.space.pricePerHour * (1 - props.space.discount)}€/hr</p>
            <form action={`/user/space/book/${props.space._id}`} method="POST">
                <label htmlFor="startDate">Start Date</label>
                <input type="date" name="startDate"/>
                <label htmlFor="startTime">Start Time</label>
                <input type="time" name="startTime"/>
            <button type="submit">Confirm Booking</button>
            </form>
            <a href={`/space/${props.space._id}`}><div>Cancel</div></a>
        </Layout>
    )
}

module.exports = CreateBooking;