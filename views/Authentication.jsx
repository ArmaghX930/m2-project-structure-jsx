const React = require("react");
const Layout = require("./Layout");

function Authentication(props) {
  return (
    <Layout title="Home Page">
      <main>
        <section>
          <h1>Sign Up</h1>
          <form action="/auth/signup" method="POST">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username"/>
            <br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="your@mail.com"/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Minimum 5 characters long"/>
            <br/>
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input type="password" name="repeatPassword" placeholder="Repeat your password"/>
            <br/>
            <button type="submit">Create Account</button>
          </form> 
            <div>
              { props.errorMessage
                ? props.errorMessage
                : null
              }
            </div>
        </section>

        <section>
          <h1>Log In</h1>
          <form action="/auth/login" method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="your@mail.com"/>
            <br/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Minimum 5 characters long"/>
            <br/>
            <button type="submit">Log In</button>
          </form> 
            <div>
              { props.errorMessage
                ? props.errorMessage
                : null
              }
            </div>
        </section>
      </main>
    </Layout>
  );
}

module.exports = Authentication;