const React = require("react");

function BookingCard(props) {
  return (
    <div className="booking-card">
        <h5>Booking confirmation</h5>
        <p>Your booking with <a href={`/space/${props.booking.spaceID._id}`}> <span>{props.booking.spaceID.title}</span></a> is confirmed at <span>{props.booking.startTime}</span> on <span>{props.booking.startDate}</span>.</p>
    </div>
  );
}

module.exports = BookingCard;

