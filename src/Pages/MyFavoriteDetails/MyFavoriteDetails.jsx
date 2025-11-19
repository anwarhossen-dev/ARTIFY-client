
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../../Components/LoadingSpinner";


const MyFavoriteDetails = () => {
    const { id } = useParams();
    // const [gallery, setGallery] = useState([])
    // const [gallery, setGallery] = useState({});
    const [count, setCount] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFavorite = async () => {       const res = await axios
            .get(`https://artify-server-six.vercel.app/favoriteArt/${id}`)
            setCount(res.data);
            console.log(res);
            setLoading(false);};
        fetchFavorite();

    }, [id]);


    const handleFavoriteButton = async () => {
        try {
            await axios.delete(`https://artify-server-six.vercel.app/favoriteArt/${count._id}`);
            toast.success("Removed from favorites");
            navigate("/my-favorites");
        } catch (err) {
            console.error(err);

        }
    };

    //console.log(count);
    if (loading) {
        return (
            // <p className="text-center py-20 text-xl font-semibold">
            //     Loading...
            // </p>
            <div>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20 p-5">
            <div className="flex flex-col md:flex-row gap-10">
                {/* LEFT SIDE : ART IMAGE */}
                <div className="flex-1">
                    <img
                        className="w-full h-80 object-cover rounded-xl"
                        src={count.ImageURL || "/placeholder.jpg"}
                        onError={(e) => (e.target.src = "/placeholder.jpg")}
                        alt="Artwork"
                    />

                     {/* <img className='w-170 md:h-90 rounded-xl ' src={gallery.ImageURL} alt="" /> */}
                   

                    <div className="mt-6">
                        <button
                            onClick={handleFavoriteButton}
                            className="btn btn-primary px-10 w-full"
                        >
                            Remove from Favorites
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE : ARTIST INFO */}
                <div className="md:w-1/3 bg-base-300 p-5 rounded-xl text-center shadow-lg">
                    <h2 className="font-bold text-xl mb-3">Artist Info</h2>
                    <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />

                    {/* <img
                        className="w-40 h-40 mx-auto rounded-full object-cover"
                        src={count.artistPhoto || "/placeholder.jpg"} // check backend field
                        onError={(e) => (e.target.src = "/placeholder.jpg")}
                        alt="Artist"
                    /> */}


                    <div className="mt-4 space-y-2">
                        <h3 className="font-semibold">
                            Name: <span className="font-medium">{count.name}</span>
                        </h3>

                        <p className="font-semibold">
                            Total Artworks:{" "}
                            <span className="font-medium">{count.totalArtworks}</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="mt-10 space-y-3">
                <h1 className="font-bold text-pink-500 text-3xl">{count.title}</h1>

                <p>
                    <span className="font-medium">Artist:</span> {count.artistname}
                </p>

                <p>
                    <span className="font-medium">Medium / Tools:</span> {count.tools}
                </p>

                <p className="mb-5">
                    <span className="font-bold italic underline">Description:</span>{" "}
                    {count.description}
                </p>

                <Link to="/explore-artworks" className="btn btn-secondary">
                    Back to Explore
                </Link>
            </div>
        </div>

        // <div className='w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20'>
        //        <div className=' p-8 flex flex-col md:flex-row justify-between gap-5'>
        //          <div>
                    
        //             <img className='w-170 md:h-90 rounded-xl ' src={count.ImageURL} alt="" />
        //            <div className=' mt-15 space-x-5 md:pl-15'>
                     
                     
        //         <button onClick={handleFavoriteButton} className='btn btn-primary px-10'>UnFavorites</button>
        //            </div>
                
        //          </div>
        //         <div className='w-80 h-full card p-3 bg-base-300 items-center r '>
        //             <h2 className='font-bold text-xl mb-2'>Artist Info</h2>
        //             <img className='w-56 h-56 rounded-full object-center' src={count.artistPhoto} alt="" />
        //             <div className=' p-2 rounded-xl mt-3'>
        //                 <h1 className='font-semibold'>Name : <span className='font-medium'>{count.name}</span></h1>
        //             <p className='font-semibold'>TotalArtworks : <span className='font-medium'>{count.totalArtworks}</span></p>
        //             </div>
        //         </div>
        //         </div>
                
        //         <div className='w-10/12 mx-auto  p-5 rounded-xl space-y-3'>
        //             <h1 className='font-bold text-pink-400 text-2xl'>{count.title}</h1>
        //             <p className=''><span className='font-medium'>Artist:</span> {count.artistname}</p>
        //             <p><span className='font-medium'>Medium:</span> {count.tools}</p>
        //             <p className='mb-10'><span className='font-bold italic underline'>Description:</span> {count.description}</p>
        //             <Link to="/explore-artworks" className='btn btn-secondary mb-10'>Back Explore</Link>
        //        </div>
        //     </div>
    );
};

export default MyFavoriteDetails;

