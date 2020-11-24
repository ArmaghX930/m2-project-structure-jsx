const React = require("react");

function SpaceCard(props) {
  return (
    <div>
      <a href={`/space/${props.space._id}`}><h3> {props.space.title} </h3></a>
      <p>Available for up to {props.space.capacity} people</p>
      <p>{props.space.pricePerHour}€ per hour</p>
      <p>{props.space.address}</p>
      <p>{props.space.city}</p>
    </div>
  );
}

module.exports = SpaceCard;
