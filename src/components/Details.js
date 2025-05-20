import Card from "./Card";

function Details({userData}) {
    return (
        <div>
            <div class="navbar">
                <div class="nav">letMe</div>
                <div class="nav">details</div>
            </div>
            <div class="container">
                <h2 class="title">Know Other People</h2>
                <div class="cards">
                    {userData.map((data) => {
                        return <Card {...data}></Card>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Details;