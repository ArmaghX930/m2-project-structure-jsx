const React = require("react");

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title> {props.title ? props.title : "My App"} </title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <header>
        <div>Logo</div>
        {props.user ? (<div>Hi {props.user.username}!</div>) : (<div>Absence of userpic</div> )}
        
      </header>

      <body>{props.children}</body>
    </html>
  );
}

module.exports = Layout;
