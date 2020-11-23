const React = require("react");
const Layout = require("./Layout");
const SpaceCard = require("./components/SpaceCard");

function Home(props) {
  return (
    <Layout title="Home Page" user={props.user ? props.user : ""}>
      <main>
        <h2>Description that blah blah</h2>
        <div>
          <div id="search-container">
            <form action="/search" method="GET">
              <label htmlFor="city">City </label>
              <input list="cities" name="city" />
              <datalist id="cities">
                 {props.cities.map((city, i) => {
                    return (
                      <option key={i} value={city} />
                    )
                 })}
              </datalist><br/>
              <label htmlFor="pricePerHour">Maximum Price </label>
              <input type="Number" name="pricePerHour"/><span>€ per hour</span><br/>
              <label htmlFor="capacity">Capacity </label>
              <input type="Number" name="capacity"/><span> people</span><br/>
              <button type="submit">Search</button>
            </form>
          </div>
          <div id="space-container">
           {props.spaces.map((spaceObj, i) => {
             return (
               <SpaceCard space={spaceObj} key={i}>
               </SpaceCard>
             )
           })}
          </div>
        </div>
      </main>
      <article id="provider-ad">
        <p>aggressive provider recruitment</p>
        {props.user 
        ? <a href="/user"><div id="become-provider-btn">BECOME SPACE PROVIDER</div></a>
        : <a href="/auth"><div id="become-provider-btn">BECOME SPACE PROVIDER</div></a>
         }
      </article>
      <section>
        <div className="space-card">SPACE CARD COMPONENT</div>
        <div className="space-card">SPACE CARD COMPONENT</div>
        <div className="space-card">SPACE CARD COMPONENT</div>
        <div className="space-card">SPACE CARD COMPONENT</div>
      </section>
    </Layout>)
}

module.exports = Home;
