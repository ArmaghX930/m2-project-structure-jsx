const React = require("react");
const Layout = require("./Layout");

function DeleteSpace (props) {
    return(
        <Layout title={`Delete ${props.space.title}`} user={props.user}>
            <form action={`/user/space/delete/${props.space._id}`} method="POST">
                <label htmlFor="deleteSpace">Are you sure you want to delete {props.space.title}? This cannot be undone</label>
                <button type="submit">Yes, I'd like to delete this space</button>
            </form>
            <a href={`/space/${props.space._id}`}><div>No, I want to keep it</div></a>
        </Layout>
        )
    }
    
    
    module.exports = DeleteSpace;
    