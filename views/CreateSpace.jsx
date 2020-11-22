const React = require("react");
const Layout = require("./Layout");
const Space = require("../models/Space.model");
const Card = require("./components/Card");

function CreateSpace() {
  return (
    <Layout title="List New Space">
      <h1>Create Space</h1>
      <form action="/user/space/add" method="POST">
        <label htmlFor="title">Title</label><br/>
        <input type="text" name="title"/>
        <br/>
        <label htmlFor="address">Address</label><br/>
        <input type="text" name="address"/>
        <br/>
        <label htmlFor="contactInfo">Contact Details</label><br/>
        <input type="textarea" name="contactInfo" rows="3" cols="30"/>
        <br/>
        <label htmlFor="capacity">Maximum Capacity</label><br/>
        <input type="number" name="capacity" min="1"/><span> People </span>
        <br/>
        <label htmlFor="welcomePhrase">Welcome Phrase</label><br/>
        <textarea name="welcomePhrase" rows="2" cols="30" maxlength="60"></textarea>
        <br/>
        <label htmlFor="description">Description</label><br/>
        <textarea name="description" rows="10" cols="50" maxlength="500"></textarea>
        <br/>
        <label htmlFor="pricePerHour">Hourly Price</label><br/>
        <input type="number" name="pricePerHour" min="0"/>
        <br/>
        <label htmlFor="priceCurrency">Currency</label><br/>
        <select name="priceCurrency">
          <option value="euros">€</option>
          <option value="dollars">$</option>
          <option value="pounds">£</option>
          <option value="rubles">₽</option>
        </select>
        <br/>
        <label htmlFor="discount">Discount</label><br/>
        <input type="number" name="discount" min="0" max="100" value="0"/><span> %</span>
        <br/>
        <label htmlFor="imageUrl">Photos</label><br/>
        <input type="string" name="imageUrl"/><br/>
        <input type="string" name="imageUrl"/><br/>
        <input type="string" name="imageUrl"/><br/>
        <input type="string" name="imageUrl"/><br/>
        <input type="string" name="imageUrl"/><br/>
        <button type="submit">Publish</button>
      </form>

    </Layout>
  );
}

module.exports = CreateSpace;