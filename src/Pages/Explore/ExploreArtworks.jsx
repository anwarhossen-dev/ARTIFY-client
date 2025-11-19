import React, { use, useEffect, useState } from 'react';
import ArtWorkCard from '../../Components/ArtworkCard';
import { AuthContext } from '../../Providers/AuthContext';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';

const ExploreArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const { loading } = use(AuthContext)

  //   useEffect(() => {
  //     axios('http://localhost:3000/addArtwork')
  //       .then(res => res.json())
  //       .then(data => {
  //         const publicArtworks = data.filter(art => art.visibility === "Public");
  //         setArtworks(publicArtworks);
  //       })
  //   }, []);
  //  if(loading){
  //   return (
  //             <div className='flex justify-center items-center mt-50'>
  //                 <span className='loading loading-bars loading-xl'></span>
  //             </div>
  //         )
  // }
  //   const handleSearch =(e)=>{
  //     e.preventDefault()
  //     const search = e.target.search.value
  //    axios(`http://localhost:3000/search?search=${search}`)
  //     .then(res => res.json())
  //     .then(data =>{
  //       setArtworks(data)

  //     })

  //   }


  useEffect(() => {
    axios.get('https://artify-server-six.vercel.app/addArtwork')
      .then(res => {
        const publicArtworks = res.data.filter(art => art.visibility === "Public");
        setArtworks(publicArtworks);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center mt-50'>
        {/* <span className='loading loading-bars loading-xl'></span> */}
        <LoadingSpinner />
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    axios.get(`https://artify-server-six.vercel.app/search?search=${search}`)
      .then(res => {
        setArtworks(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    //     <div className="w-10/12 mx-auto py-10">
    //       {/*  Search Bar */}
    //       <h1 className='text-center text-4xl font-bold'>Explore Artworks</h1>
    //     <form onSubmit={handleSearch} className='mt-5 mb-10 flex justify-center gap-2'>
    //        <label className="input rounded-2xl">
    //   <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    //     <g
    //       strokeLinejoin="round"
    //       strokeLinecap="round"
    //       strokeWidth="2.5"
    //       fill="none"
    //       stroke="currentColor"
    //     >
    //       <circle cx="11" cy="11" r="8"></circle>
    //       <path d="m21 21-4.3-4.3"></path>
    //     </g>
    //   </svg>
    //   <input name="search" type="search"  placeholder="Search"  />
    // </label>
    // <button className='btn btn-secondary rounded-2xl'>Search</button>
    //     </form>

    //       {/*  Artworks Grid */}
    //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //          {
    //           artworks.map((promise) => 
    //             <ArtWorkCard key={promise._id} promise={promise} /> )}


    //       </div>
    //     </div>

    <div className="w-10/12 mx-auto py-10 mt-10">
      {/*  Search Bar */}
      <h1 className='text-center text-4xl font-bold'>Explore Artworks</h1>
      <form onSubmit={handleSearch} className='mt-5 mb-10 flex justify-center gap-2'>
        <label className="input rounded-2xl">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className='btn btn-secondary rounded-2xl'>Search</button>
      </form>

      {/*  Artworks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          artworks.map((promise) =>
            <ArtWorkCard key={promise._id} promise={promise} />)}


      </div>
    </div>
  );
};

export default ExploreArtworks;