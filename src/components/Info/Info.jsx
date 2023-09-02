
const Info = ({ name, biography }) => {

    return (
        <div className="infodiv">
            <h1 className="name">{name}</h1>
            <h2 className="biography">{biography}</h2>
        </div>
    );
}

export default Info;