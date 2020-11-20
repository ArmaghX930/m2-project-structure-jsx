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
                <a href={`/user/userid=${props.user._id}`}>
                  <div>
                    {props.user.username}
                  </div>
                </a>
                <div>Logout button</div>
              </div>) 
          : (<div>Absence of userpic</div> )}
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
