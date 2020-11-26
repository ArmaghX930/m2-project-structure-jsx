const React = require("react");
const Layout = require("./Layout");

function Faq(props) {
  return (
    <Layout title="FAQ" user={props.user ? props.user : ""} pageCSS="/stylesheets/faq.css">
      <main>
       <h1>Frequently Asked Questions</h1>
        <article>
          <h2>Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lacus dui, non commodo nunc convallis sit amet. In sit amet aliquet eros. Aliquam nibh dolor, tincidunt eu viverra at, viverra ac est. Ut vulputate rhoncus lorem, vitae fringilla ipsum lobortis non. Sed laoreet accumsan enim, ut ullamcorper lorem molestie a.</p>
        </article>
        <article>
          <h2>Question 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lacus dui, non commodo nunc convallis sit amet. In sit amet aliquet eros. Aliquam nibh dolor, tincidunt eu viverra at, viverra ac est. Ut vulputate rhoncus lorem, vitae fringilla ipsum lobortis non. Sed laoreet accumsan enim, ut ullamcorper lorem molestie a.</p>
        </article>
        <article>
          <h2>Question 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lacus dui, non commodo nunc convallis sit amet. In sit amet aliquet eros. Aliquam nibh dolor, tincidunt eu viverra at, viverra ac est. Ut vulputate rhoncus lorem, vitae fringilla ipsum lobortis non. Sed laoreet accumsan enim, ut ullamcorper lorem molestie a.</p>
        </article>
        <article>
          <h2>Question 4</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan lacus dui, non commodo nunc convallis sit amet. In sit amet aliquet eros. Aliquam nibh dolor, tincidunt eu viverra at, viverra ac est. Ut vulputate rhoncus lorem, vitae fringilla ipsum lobortis non. Sed laoreet accumsan enim, ut ullamcorper lorem molestie a.</p>
        </article>
      </main>
    </Layout>
  );
}

module.exports = Faq;