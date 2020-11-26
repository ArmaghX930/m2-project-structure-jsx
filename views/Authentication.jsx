const React = require("react");
const Layout = require("./Layout");

function Authentication(props) {
  return (
    <Layout title="Login/Signup">
      <main id="auth-container">
        <section>
          <h1>Sign Up</h1>
          <hr/>
          <form action="/auth/signup" method="POST">
            <label htmlFor="username">Username</label> <br/>
            <input type="text" name="username" placeholder="username"/>
            <br/>
            <label htmlFor="email">Email</label> <br/>
            <input type="email" name="email" placeholder="your@mail.com"/>
            <br/>
            <label htmlFor="password">Password</label> <br/>
            <input type="password" name="password" placeholder="Minimum 5 characters long"/>
            <br/>
            <label htmlFor="repeatPassword">Repeat Password</label> <br/>
            <input type="password" name="repeatPassword" placeholder="Repeat your password"/>
            <br/>
            <button type="submit" class="click-btn">Sign Up</button>
          </form> 
        </section>
        
              { props.errorMessage
                ? <div id="error-msg"> {props.errorMessage} </div>
                : null
              }
            
        <section>
          <h1>Log In</h1>
          <hr/>
          <form action="/auth/login" method="POST">
            <label htmlFor="email">Email</label> <br/>
            <input type="email" name="email" placeholder="your@mail.com"/>
            <br/>
            <label htmlFor="password">Password</label> <br/>
            <input type="password" name="password" placeholder="Minimum 5 characters long"/>
            <br/>
            <button type="submit" class="click-btn">Log In</button>
          </form> 
        </section>
      </main>
    </Layout>
  );
}

module.exports = Authentication;