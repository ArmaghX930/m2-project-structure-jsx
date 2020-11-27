const React = require("react");
const Layout = require("./Layout");
const SpaceCard = require("./components/SpaceCard");

function Home(props) {
  return (
    <Layout title="spaceOut" user={props.user ? props.user : ""}>
      <main>
        <section id="home-intro">
          <h2 className="intro-text">With spaceOut, book a co-working space on an hourly rate. <br/> Change your office environment as often as you want choosing among various options in your area!</h2>
          <div id="search-container">
            <div id="search-form">
              <form action="/search" method="GET">
                <label htmlFor="city">City </label> <br/>
                <input list="cities" name="city" />
                <datalist id="cities">
                  {props.cities.map((city, i) => {
                      return (
                        <option key={i} value={city} />
                      )
                  })}
                </datalist><br/>
                <label htmlFor="pricePerHour">Maximum Price </label> <br/>
                <input type="Number" name="pricePerHour" placeholder="€ per hour"/><br/>
                <label htmlFor="capacity">Capacity </label> <br/>
                <input type="Number" name="capacity" placeholder="how many people"/><br/>
                <label htmlFor="availToday">Available Today</label> 
                <input type="checkbox" name="availToday" value="true" /><br/>
                <button class="click-btn" type="submit">Search</button>
              </form>
            </div>
            <div className="space-container">
            {props.spaces.map((spaceObj, i) => {
              return (
                <SpaceCard space={spaceObj} key={i}>
                </SpaceCard>
              )
            })}
            </div>
          </div>
        </section>
        <hr id="home-hr"/>
        <article id="provider-ad">
          <h2 className="intro-text">You can become a space provider by listing your unused equipped space. <br/> Convert those square meters into your passive income!</h2>
          {props.user 
          ? <a href="/user"><div id="become-provider-btn">BECOME SPACE PROVIDER</div></a>
          : <a href="/auth"><div id="become-provider-btn">BECOME SPACE PROVIDER</div></a>
          }
        </article>
      </main>
      
    </Layout>)
}

module.exports = Home;
