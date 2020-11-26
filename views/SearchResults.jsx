const React = require("react");
const Layout = require("./Layout");
const SpaceCard = require("./components/SpaceCard");

function SearchResults(props) {
  return (
    <Layout title="Search for Spaces" user={props.user ? props.user : ""} pageCSS="/stylesheets/search-results.css">
              <form action="/search" method="GET">
                <div>
                  <label htmlFor="city">City </label>
                  <input list="cities" name="city" value={props.search.city} />
                  <datalist id="cities">
                    {props.cities.map((city, i) => {
                        return (
                          <option key={i} value={city} />
                        )
                    })}
                </datalist>
                </div>
                <div>
                  <label htmlFor="pricePerHour">Maximum Price </label>
                  <input type="Number" name="pricePerHour" value={props.search.pricePerHour}/><span>€ per hour</span>
                </div>
                <div>
                  <label htmlFor="capacity">Capacity </label>
                  <input type="Number" name="capacity" value={props.search.capacity}/><span> people</span>
                </div>
              <div>
                <label htmlFor="availToday">Available Today</label>
                <input type="checkbox" name="availToday" value="true" />
              </div>
              <button type="submit" id="search-btn">Search</button>
            </form>
      <h1>Search Results</h1>
      <div id="search-res-container">
        <div id="space-cont-search">
          
          {props.spaces.map((spaceObj, i) => {
                  return (
                    <div className="space-div">
                      <SpaceCard space={spaceObj} key={i}>
                    </SpaceCard>
                    </div>
                  )
              })}
        </div>
          
        <div id='map' style={{width: "400px", height: "300px"}}></div>
      </div>
      

      <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
      <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
      <script async defer src="https://unpkg.com/axios/dist/axios.min.js"></script>
      <script src="/javascripts/mapbox.js"></script>
    </Layout>
  );
}

module.exports = SearchResults;