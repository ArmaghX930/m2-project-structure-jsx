const React = require("react");

function Layout(props) {
  return (
    <html lang="en_GB">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <title> {props.title ? props.title : "spaceOut"} </title>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <header id="layout-header" class="layout">
          <a href="/"><div> <img src="/images/logo.png" width="180"/> </div></a>
          <h3>Self explanatory catchphrase</h3>
          {props.user 
          ? ( <div id="login-header-div">
                <a href={`/user`}>
                  <div>
                    <img class="layout-profile-pic" src={props.user.imageUrl}/>
                  </div>
                </a>
                <a href="/auth/logout">
                <div>
                  <img src="/images/logout-btn.png" width="25" height="25"/>
                </div>
                </a>
              </div>) 
          : (<a href="/auth/"><div> <img class="layout-profile-pic" src="/images/profile-image-placeholder.png"/> </div></a>)}
        </header>
        {props.children}
        <footer class="layout">
          <a href="/faq">
            <div id="faq">FAQ</div>
          </a>
          <h6>Developed by us</h6>
        </footer>
      </body>      
    </html>
  );
}

module.exports = Layout;
