import Card from "./Card";

function Details({userData}) {
    return (
        <div>
            <div className="navbar">
                <div className="nav">letMe</div>
                <div className="nav">details</div>
            </div>
            <div className="container">
                <h2 className="title">Know Other People</h2>
                <div className="cards">
                    {userData.map((data) => {
                        return <Card key={data.id} {...data}></Card>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Details;