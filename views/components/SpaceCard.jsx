const React = require("react");

function SpaceCard(props) {
  return (
    <div className="space-card">
      <a href={`/space/${props.space._id}`}>
      <div>
      <h3> {props.space.title} </h3>
      {props.space.availToday
                    ?   <div>
                            <h4>Available Today</h4>
                        </div>
                    : null
                    }
      <p>Available for up to {props.space.capacity} people</p>
      <p>{props.space.pricePerHour}€ per hour</p>
      <p>{props.space.address}</p>
      <p>{props.space.city}</p>
      </div>
      </a>
      <img src={props.space.imageUrl} width="200px" height="100px"/>
    </div>
  );
}

module.exports = SpaceCard;
