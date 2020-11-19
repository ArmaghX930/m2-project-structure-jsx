const React = require("react");
const Layout = require("./Layout");

function Home(props) {
  return (
    props.user ? ( 
    <Layout title="Home Page" user={props.user}>
      <h1>Home Page</h1>
      <h1>Hi {props.user.username}!</h1>
  </Layout>)
  :  <h1>You are not logged in</h1>
  )
}

module.exports = Home;
