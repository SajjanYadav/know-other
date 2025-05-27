import React, { useEffect, useState } from "react";
import Details from "./components/Details";
import banner from './your-video.mp4'
import Spinner from "./components/Spinner";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Error from './components/Error'

const App = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 10;
  const pageCount = 5;
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
    setPage(selectedPage.selected + 1); 
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
            <div className="pagination">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                breakClassName="pagination-break"
                pageCount={pageCount} 
                marginPagesDisplayed={1} 
                pageRangeDisplayed={1} 
                onPageChange={handlePageClick}
                containerClassName="pagination-container"
                activeClassName="pagination-active"
                disabledClassName="pagination-disabled"
                nextClassName="pagination-next"
                previousClassName="pagination-prev"
                pageClassName="pagination-page"
              />
            </div>
          </div>}
        </div>        
      }
      
    </div>
  );
};

export default App;
