const React = require("react");

function SpaceCard(props) {
  return (
    <div className="space-card">
      <a href={`/space/${props.space._id}`}>
      <div>
      <h3> {props.space.title} </h3>
      <hr/>
      <p>Available for up to {props.space.capacity} people</p>
      <hr/>
      <p>{props.space.pricePerHour}€ per hour</p>
      <hr/>
      <p>{props.space.address}</p>
      <hr/>
      <h3>{props.space.city}</h3>
      </div>
      </a>
      <div>
        {props.space.availToday
                      ?   <div id="avail-today-flag">
                              <p>Available Today</p>
                          </div>
                      : null
                      }
        {props.space.imageUrl 
          ? <img src={props.space.imageUrl} width="130px" height="100px"/>
          : <img src="/images/office-default-img.png" width="130px" height="100px"/>
        
        }
        
      </div>
      
    </div>
  );
}

module.exports = SpaceCard;
