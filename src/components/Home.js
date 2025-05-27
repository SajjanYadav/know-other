import React, { useEffect, useState } from "react";
import Details from "./Details";
import banner from './your-video.mp4'
import Spinner from "./Common/Spinner";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Error from './Common/Error'

const Home = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 15;
  const pageCount = 14;
  const [page,  setPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDataOfUsers() {
      setLoading(true);
      const skip = (page-1)*limit;
      const url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
      try {
        const resp = await axios.get(url);
        setUserData(resp.data.users);
        console.log(resp.data);
      } catch (err) {
        console.log("Error Occured while fetching the data");
        setError(true);
      }finally {
        setLoading(false); 
      }
    }

    fetchDataOfUsers();
  }, [page]);

  const handlePageClick = (selectedPage) => {
    console.log(selectedPage.selected);
    setPage(selectedPage.selected+1); 
  };

  return (
    <div className="app-container">
      <video autoPlay loop muted id="bg-video">
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {
        loading ? <Spinner /> : 
        <div className="content-overlay">
          {error ? <Error /> : 
          <div>
            <Details userData={userData} />
            <div>
              <ReactPaginate
                forcePage={page - 1}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={handlePageClick}
                containerClassName="flex justify-center gap-2 list-none p-0"
                pageClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-800 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-400"
                previousClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-800 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-400"
                nextClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-800 cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-400"
                breakClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-800 cursor-pointer"
                activeClassName="bg-blue-700 text-white font-bold"
                disabledClassName="opacity-50 pointer-events-none"
              />
            </div>
          </div>}
        </div>        
      }
      
    </div>
  );
};

export default Home;
