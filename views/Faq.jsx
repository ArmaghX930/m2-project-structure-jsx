const React = require("react");
const Layout = require("./Layout");

function Faq(props) {
  return (
    <Layout title="FAQ" user={props.user ? props.user : ""}>
      <main>
       <h2>Frequently Asked Questions</h2>
        <article>
          <h4>Question</h4>
          <p>LOREM IPSUM</p>
        </article>
        <article>
          <h4>Question 2</h4>
          <p>LOREM IPSUM</p>
        </article>
        <article>
          <h4>Question 3</h4>
          <p>LOREM IPSUM</p>
        </article>
      </main>
    </Layout>
  );
}

module.exports = Faq;