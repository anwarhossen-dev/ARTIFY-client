
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
            .get(`http://localhost:3000/favoriteArt/${id}`)
            setCount(res.data);
            console.log(res);
            setLoading(false);};
        fetchFavorite();

    }, [id]);

//    useEffect(() => {
//     setLoading(true);
//     axios
//         .get(`http://localhost:3000/favoriteArt/${id}`)
//         .then((res) => {
//             setCount(res.data); // already parsed
//             setLoading(false);
//         })
//         .catch((err) => {
//             console.error(err);
//             setLoading(false); // stop loader on error
//             toast.error("Failed to fetch artwork");
//         });
// }, [id]);


    const handleFavoriteButton = async () => {
        try {
            await axios.delete(`http://localhost:3000/favoriteArt/${count._id}`);
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
    );
};

export default MyFavoriteDetails;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import LoadingSpinner from "../../Components/LoadingSpinner";

// const MyFavoriteDetails = () => {
//     const { id } = useParams();
//     const [count, setCount] = useState({});
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchFavorite = async () => {
//             try {
//                 setLoading(true);
//                 const res = await axios.get(`http://localhost:3000/favoriteArt/${id}`);
//                 setCount(res.data);
//             } catch (err) {
//                 console.error("Error fetching favorite artwork:", err);
//                 toast.error("Failed to load artwork");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchFavorite();
//     }, [id]);

//     const handleFavoriteButton = async () => {
//         try {
//             await axios.delete(`http://localhost:3000/favoriteArt/${count._id}`);
//             toast.success("Removed from favorites");
//             navigate("/my-favorites");
//         } catch (err) {
//             console.error("Error removing favorite:", err);
//             toast.error("Failed to remove favorite");
//         }
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center py-20">
//                 <LoadingSpinner />
//             </div>
//         );
//     }
    

//     // Build correct image URLs
//     const artworkImage = count.ImageURL
//         ? count.ImageURL.startsWith("http")
//             ? count.ImageURL
//             : `http://localhost:3000/${count.ImageURL}`
//         : "/placeholder.jpg";

//     const artistImage = count.artistPhoto
//         ? count.artistPhoto.startsWith("http")
//             ? count.artistPhoto
//             : `http://localhost:3000/${count.artistPhoto}`
//         : "/placeholder.jpg";

//     return (
//         <div className="w-11/12 md:w-8/12 mx-auto bg-base-100 shadow-2xl rounded-xl my-20 p-5">
//             <div className="flex flex-col md:flex-row gap-10">
//                 {/* LEFT SIDE: Artwork Image */}
//                 <div className="flex-1">
//                     {/* <img
//                         className="w-full h-80 object-cover rounded-xl"
//                         src={artworkImage}
//                         onError={(e) => (e.target.src = "/placeholder.jpg")}
//                         alt={count.title || "Artwork"}
//                     /> */}
//                     <img
//                         className="w-full h-80 object-cover rounded-xl"
//                         src={artworkImage}
//                         onError={(e) => (e.target.src = "/placeholder.jpg")}
//                         alt={count.title || "Artwork"}
//                     />
//                     <div className="mt-6">
//                         <button
//                             onClick={handleFavoriteButton}
//                             className="btn btn-primary px-10 w-full"
//                         >
//                             Remove from Favorites
//                         </button>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE: Artist Info */}
//                 <div className="md:w-1/3 bg-base-300 p-5 rounded-xl text-center shadow-lg">
//                     <h2 className="font-bold text-xl mb-3">Artist Info</h2>
//                     {/* <img
//                         className="w-40 h-40 mx-auto rounded-full object-cover"
//                         src={artistImage}
//                         onError={(e) => (e.target.src = "/placeholder.jpg")}
//                         // onError={(e) => {
//                         //     console.error("Failed to load image:", artworkImage);
//                         //     e.target.src = "/placeholder.jpg";
//                         // }}

//                         alt={count.name || "Artist"}
//                     /> */}
//                     <img
//                         className="w-56 h-56 rounded-full object-cover mx-auto"
//                         src={artistImage}
//                         onError={(e) => (e.target.src = "/placeholder.jpg")}
//                         alt={count.name || "Artist"}
//                     />
//                     <div className="mt-4 space-y-2">
//                         <h3 className="font-semibold">
//                             Name: <span className="font-medium">{count.name}</span>
//                         </h3>
//                         <p className="font-semibold">
//                             Total Artworks:{" "}
//                             <span className="font-medium">{count.totalArtworks}</span>
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* DETAILS SECTION */}
//             <div className="mt-10 space-y-3">
//                 <h1 className="font-bold text-pink-500 text-3xl">{count.title}</h1>
//                 <p>
//                     <span className="font-medium">Artist:</span> {count.artistname}
//                 </p>
//                 <p>
//                     <span className="font-medium">Medium / Tools:</span> {count.tools}
//                 </p>
//                 <p className="mb-5">
//                     <span className="font-bold italic underline">Description:</span>{" "}
//                     {count.description}
//                 </p>
//                 <Link to="/explore-artworks" className="btn btn-secondary">
//                     Back to Explore
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default MyFavoriteDetails;
