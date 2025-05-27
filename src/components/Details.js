import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Details({userData}) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex justify-between p-4 text-[20px] font-bold bg-black/40 text-white mb-5 rounded-[10px]">
                <div className="nav">letMe</div>
                <div className="nav">details</div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[3rem] my-[6vh] rounded-[20px] border-[7px] border-dashed border-[#F9A12EFF] px-[5vw] py-[1vh] text-amber-300">
                    Know Other People
                </h2>
                <div className="flex flex-wrap justify-center gap-6 p-6">
                {userData.map((data) => (
                    <Card key={data.id} {...data} 
                        onClick={() => navigate(`/user/${data.id}`)}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Details;