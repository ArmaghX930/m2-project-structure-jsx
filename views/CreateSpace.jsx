const React = require("react");
const Layout = require("./Layout");

function CreateSpace(props) {
  return (
    <Layout title="List New Space" user={props.user} pageCSS="/stylesheets/space.css">
      <h1>Create Space</h1>
      <form action="/user/space/add" method="POST" encType="multipart/form-data">
        <label htmlFor="title">Title</label><br/>
        <input type="text" name="title" maxlength="20"/>
        <br/>
        <label htmlFor="address">Address</label><br/>
        <input type="text" name="address"/>
        <br/>
        <label htmlFor="city">City</label><br/>
        <input type="text" name="city" required/>
        <br/>
        <label htmlFor="contactInfo">Contact Details</label><br/>
        <textarea name="contactInfo" rows="3" cols="30" maxlength="90"placeholder="Phone Number, Website Link, Instagram @, etc"/>
        <br/>
        <label htmlFor="capacity">Maximum Capacity</label><br/>
        <input type="number" name="capacity" min="1" required/><span> people </span>
        <br/>
        <label htmlFor="welcomePhrase">Welcome Phrase</label><br/>
        <textarea name="welcomePhrase" rows="2" cols="30" maxlength="60"></textarea>
        <br/>
        <p>Amenities</p>
        <label htmlFor="amenities">WiFi</label>
        <input type="checkbox" name="amenities" value="WiFi" /><br/>
        <label htmlFor="amenities">WC</label>
        <input type="checkbox" name="amenities" value="WC" /><br/>
        <label htmlFor="amenities">Coffee Machine</label>
        <input type="checkbox" name="amenities" value="Coffee Machine" /><br/>
        <label htmlFor="amenities">Refrigerator</label>
        <input type="checkbox" name="amenities" value="Refrigerator" /><br/>
        <label htmlFor="amenities">Climate Control</label>
        <input type="checkbox" name="amenities" value="Climate Control" /><br/>
        <label htmlFor="amenities">Phone Booth</label>
        <input type="checkbox" name="amenities" value="Phone Booth" /><br/>
        <label htmlFor="amenities">Terrace</label>
        <input type="checkbox" name="amenities" value="Terrace" /><br/>
        <label htmlFor="amenities">Indoor Smoking Patio</label>
        <input type="checkbox" name="amenities" value="Indoor Smoking Patio" /><br/>
        <label htmlFor="amenities">Ergonomic Equipment</label>
        <input type="checkbox" name="amenities" value="Ergonomic Equipment" /><br/>
        <label htmlFor="amenities">Kitchen</label>
        <input type="checkbox" name="amenities" value="Kitchen" /><br/>
        <label htmlFor="amenities">Canteen</label>
        <input type="checkbox" name="amenities" value="Canteen" /><br/>
        <label htmlFor="description">Description</label><br/>
        <textarea name="description" rows="10" cols="50" maxlength="500"></textarea>
        <br/>
        <label htmlFor="pricePerHour">Hourly Price</label><br/>
        <input type="number" name="pricePerHour" min="0" required/><span>€</span>
        <br/>
        <label htmlFor="discount">Discount</label><br/>
        <input type="number" name="discount" min="0" max="100" value="0"/><span> %</span>
        <br/>
        <label htmlFor="availToday">Available Today</label><br/>
        <input type="checkbox" name="availToday" value="true" />
        <br/>
        <label htmlFor="imageUrl">Photo</label><br/>
        <input type="file" name="imageUrl"/><br/>
        
        <button type="submit">Publish</button>
      </form>

    </Layout>
  );
}

module.exports = CreateSpace;