const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <header>
          <a href="/"><div>Logo</div></a>
          <h3>Self explanatory catchphrase</h3>
          {props.user 
          ? ( <div>
                <a href={`/user`}>
                  <div>
                    {props.user.username}
                  </div>
                </a>
                <a href="/auth/logout">
                <div>Logout button</div>
                </a>
              </div>) 
          : (<a href="/auth/"><div>Absence of userpic</div></a>)}
        </header>
        <hr/>
        {props.children}
        <footer>
          <a href="/faq">
            <div>FAQ</div>
          </a>
          <h6>Developed by us</h6>
        </footer>
      </body>      
    </html>
  );
}

module.exports = Layout;
