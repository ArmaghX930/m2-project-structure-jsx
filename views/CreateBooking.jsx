const { PromiseProvider } = require("mongoose");
const React = require("react");
const Layout = require("./Layout");

function CreateBooking () {
    return(
        <Layout title="New Booking" user={props.user}>
            <h3>Booking Details</h3>
            <form action={`/user/space/book/${props.space._id}`} method="POST">
                <label htmlFor=""></label>
            </form>
        </Layout>
    )
}

module.exports = CreateBooking;