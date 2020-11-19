const React = require("react");
const Layout = require("./Layout");

function UserProfile(props) {
  return (
    <Layout title="User Page">
        <p>{}</p>
    </Layout>
  );
}

module.exports = UserProfile;