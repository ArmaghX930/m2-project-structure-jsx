const React = require("react");

function BookingCard(props) {
  return (
    <div>
        <h5>Booking confirmation</h5>
        <p>Your booking with <a href={`/space/${props.booking.spaceID._id}`}>{props.booking.spaceID.title}</a> is confirmed at {props.booking.startDate} on {props.booking.startDate}.</p>
    </div>
  );
}

module.exports = BookingCard;
