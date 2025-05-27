import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Common/Spinner";
import DetailedView from "./DetailedView";

const UserDetails = () => {

    const { id } = useParams();
    const [ user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchingDetails(){
            setLoading(true);
            const data = await axios.get(`https://dummyjson.com/users/${id}`);
            setUser(data.data);
            console.log(data.data);
            setLoading(false);
        }    

        fetchingDetails();
    }, [id])

    return (
        <div>
            {
                loading ? <Spinner /> : <DetailedView user={user} />
            }      
        </div>
    )
}

export default UserDetails;