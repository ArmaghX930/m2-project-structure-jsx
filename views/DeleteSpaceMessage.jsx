const React = require("react");
const Layout = require("./Layout");

function DeleteSpace (props) {
    return(
        <Layout title={`Delete ${props.space.title}`} user={props.user} pageCSS="/stylesheets/space.css">
            <main id="del-space-msg">
                <form action={`/user/space/delete/${props.space._id}`} method="POST"> 
                    <label htmlFor="deleteSpace">Are you sure you want to delete <br/> {props.space.title}? <br/> This cannot be undone</label> <br/>
                    <div>
                        <a href={`/space/${props.space._id}`}><button className="profile-btn">Keep Space</button ></a> <button type="submit">Delete Space</button>
                    </div>
                </form>
            </main>
        </Layout>
        )
    }
    
    
    module.exports = DeleteSpace;
    