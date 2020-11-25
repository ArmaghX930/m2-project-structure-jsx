const React = require('react');
const Layout = require('./Layout');

function EditSpace(props) {
    return (
        <Layout title={`Edit ${props.space.title}`} user={props.user}>
            <h1>Edit Space</h1>
                <form action={`/user/space/edit/${props.space._id}`} method="POST" encType="multipart/form-data">
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" name="title" value={props.space.title}/>
                    <br/>
                    <label htmlFor="address">Address</label><br/>
                    <input type="text" name="address" value={props.space.address}/>
                    <br/>
                    <label htmlFor="coordinates">Provide the Location Coordinates to Display the Space on the Map(optional)</label><br/>
                    <input type="text" name="longitude" placeholder="Longitude" value={props.space.coordinates[0]}/> <br/>
                    <input type="text" name="latitude" placeholder="Latitude" value={props.space.coordinates[1]}/> 
                    <br/>
                    <label htmlFor="city">City</label><br/>
                    <input type="text" name="city" required value={props.space.city}/>
                    <br/>
                    <label htmlFor="contactInfo">Contact Details</label><br/>
                    <textarea name="contactInfo" rows="3" cols="30" maxlength="90"placeholder="Phone Number, Website Link, Instagram @, etc" value={props.space.contactInfo}/>
                    <br/>
                    <label htmlFor="capacity">Maximum Capacity</label><br/>
                    <input type="number" name="capacity" min="1" required value={props.space.capacity}/><span> People </span>
                    <br/>
                    <label htmlFor="welcomePhrase">Welcome Phrase</label><br/>
                    <textarea name="welcomePhrase" rows="2" cols="30" maxlength="60" value={props.space.welcomePhrase}></textarea>
                    <br/>
                    <p>Amenities</p>
                    <label htmlFor="amenities">WiFi</label>
                    {props.space.amenities.includes("WiFi") 
                    ? (<input type="checkbox" name="amenities" value="WiFi" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="WiFi"/>)}
                    <br/>
                    <label htmlFor="amenities">WC</label>
                    {props.space.amenities.includes("WC") 
                    ? (<input type="checkbox" name="amenities" value="WC" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="WC"/>)}
                    <br/>
                    <label htmlFor="amenities">Coffee Machine</label>
                    {props.space.amenities.includes("Coffee Machine") 
                    ? (<input type="checkbox" name="amenities" value="Coffee Machine" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Coffee Machine"/>)}
                    <br/>
                    <label htmlFor="amenities">Refrigerator</label>
                    {props.space.amenities.includes("Refrigerator") 
                    ? (<input type="checkbox" name="amenities" value="Refrigerator" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Refrigerator"/>)}
                    <br/>
                    <label htmlFor="amenities">Climate Control</label>
                    {props.space.amenities.includes("Climate Control") 
                    ? (<input type="checkbox" name="amenities" value="Climate Control" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Climate Control"/>)}
                    <br/>
                    <label htmlFor="amenities">Phone Booth</label>
                    {props.space.amenities.includes("Phone Booth") 
                    ? (<input type="checkbox" name="amenities" value="Phone Booth" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Phone Booth"/>)}
                    <br/>
                    <label htmlFor="amenities">Terrace</label>
                    {props.space.amenities.includes("Terrace") 
                    ? (<input type="checkbox" name="amenities" value="Terrace" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Terrace"/>)}
                    <br/>
                    <label htmlFor="amenities">Indoor Smoking Patio</label>
                    {props.space.amenities.includes("Indoor Smoking Patio") 
                    ? (<input type="checkbox" name="amenities" value="Indoor Smoking Patio" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Indoor Smoking Patio"/>)}
                    <br/>
                    <label htmlFor="amenities">Ergonomic Equipment</label>
                    {props.space.amenities.includes("Ergonomic Equipment") 
                    ? (<input type="checkbox" name="amenities" value="Ergonomic Equipment" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Ergonomic Equipment"/>)}
                    <br/>
                    <label htmlFor="amenities">Kitchen</label>
                    {props.space.amenities.includes("Kitchen") 
                    ? (<input type="checkbox" name="amenities" value="Kitchen" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Kitchen"/>)}
                    <br/>
                    <label htmlFor="amenities">Canteen</label>
                    {props.space.amenities.includes("Canteen") 
                    ? (<input type="checkbox" name="amenities" value="Canteen" checked="checked"/>)
                    : (<input type="checkbox" name="amenities" value="Canteen"/>)}
                    <br/>
                    <label htmlFor="description">Description</label><br/>
                    <textarea name="description" rows="10" cols="50" maxlength="500"></textarea>
                    <br/>
                    <label htmlFor="pricePerHour">Hourly Price</label><br/>
                    <input type="number" name="pricePerHour" min="0" required value={props.space.pricePerHour}/><span>€</span>
                    <br/>
                    <label htmlFor="discount">Discount</label><br/>
                    <input type="number" name="discount" min="0" max="100" value="0" value={props.space.discount * 100}/><span> %</span>
                    <br/>
                    <p>Current Image</p>
                    <img width="120px" src={props.space.imageUrl} /><br/>
                    <label htmlFor="imageUrl">Update Photo</label><br/>
                    <input type="file" name="imageUrl" /> <br/>
                    <label htmlFor="availToday">Available Today</label><br/>
                    {props.space.availToday 
                    ? <input type="checkbox" name="availToday" checked="checked" value="true" />
                    : <input type="checkbox" name="availToday" value="true" />
                    }
                    
                    <br/>
                    <button type="submit">Publish</button>
                    
                </form>
        </Layout>

    )

}

module.exports = EditSpace;