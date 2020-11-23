const React = require("react");
const Layout = require("./Layout");
const SpaceCard = require("./components/SpaceCard");

function SearchResults(props) {
  return (
    <Layout title="Search Spaces" user={props.user ? props.user : ""}>
          <div id="search-horizontal-container">
            <form action="/search" method="GET">
              <label htmlFor="city">City </label>
              <input list="cities" name="city" value={props.search.city} />
              <datalist id="cities">
                 {props.cities.map((city, i) => {
                    return (
                      <option key={i} value={city} />
                    )
                 })}
              </datalist><br/>
              <label htmlFor="pricePerHour">Maximum Price </label>
              <input type="Number" name="pricePerHour" value={props.search.pricePerHour}/><span>€ per hour</span><br/>
              <label htmlFor="capacity">Capacity </label>
              <input type="Number" name="capacity" value={props.search.capacity}/><span> people</span><br/>
              <button type="submit">Search</button>
            </form>
          </div>
      <h1>Search Results</h1>
        {props.spaces.map((spaceObj, i) => {
              return (
                <SpaceCard space={spaceObj} key={i}>
                </SpaceCard>
              )
            })}
    </Layout>
  );
}

module.exports = SearchResults;