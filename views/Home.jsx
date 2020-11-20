const React = require("react");
const Layout = require("./Layout");

function Home(props) {
  return (
    <Layout title="Home Page" user={props.user ? props.user : ""}>
      <main>
        <h2>Description that blah blah</h2>
        <div>
          <div id="search-container">
          </div>
          <div id="space-container">
            <div className="space-card">SPACE CARD COMPONENT</div>
            <div className="space-card">SPACE CARD COMPONENT</div>
            <div className="space-card">SPACE CARD COMPONENT</div>
            <div className="space-card">SPACE CARD COMPONENT</div>
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
