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
                    <aside>

                        <p> Capacity: </p>{props.space.capacity === 1 ? 
                            <p> {props.space.capacity} person</p>
                            : <p> {props.space.capacity} people</p>
                        }
                        <p> Price: {props.space.pricePerHour}{props.space.priceCurrency} per hour </p>
                        <p> Current discount: {props.space.discount * 100}% </p>
                        <p> Price with discount: {props.space.pricePerHour * (1 - props.space.discount)} per hour</p>
                        <p> Amenities: </p>
                        <ul>
                            {
                            props.space.amenities.map((amenity, i) => {
                                return(
                                    <li key={i}>{amenity}</li>
                                )
                            })
                            }
                        </ul>
                        <p>HERE GOES CALENDAR</p>
                    </aside>
                    <div>
                        {
                        props.space.imageUrl.map((image, i) => {
                            return(
                                <img key={i} src={image} />
                            )
                        })
                        }
                    </div>
                </section>
                <h3> {props.space.address} </h3>
            </main>

            {/* <div id='map' style='width: 400px; height: 300px;'></div>

<script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
<script src="/javascripts/mapbox.js"></script> */}

        </Layout>
    )
}


module.exports = ViewSpace;
