import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import FavoriteDetails from '../../Components/FavoriteDetails';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { FaUserAlt } from 'react-icons/fa';

const MyFavorites = () => {
    const { user } = use(AuthContext)
    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true);



    //    useEffect(()=>{

    //        axios(`http://localhost:3000/my-favoriteArt?email=${user.email}`)
    //        .then(res => res.json())
    //        .then(data => {
    //            setGallery(data)
    //        })
    //    },[user])

    // useEffect(() => {
    //     if (!user?.email) return;

    //     axios.get(`http://localhost:3000/my-favoriteArt?email=${user.email}`)
    //         .then(res => setGallery(res.data))
    //         .catch(err => console.error(err));
    //     setLoading(false);
    // }, [user]);

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true); // Start loading

        axios
            .get(`https://artify-server-six.vercel.app/my-favoriteArt?email=${user.email}`)
            .then(res => {
                setGallery(res.data);
                setLoading(false); // Stop loading
            })
            .catch(err => {
                console.error(err.massage);
                setLoading(false);
            });
    }, [user]);



    // const handleRemoveFromGallery = (id) => {
    //     setGallery(prev => prev.filter(item => item._id !== id));
    // };

    const handleRemoveFromGallery = async (id) => {
        try {
            await axios.delete(`https://artify-server-six.vercel.app/favoriteArt/${id}`);

            // UI থেকে remove করা
            setGallery(prev => prev.filter(item => item._id !== id));

            Swal.fire({
                icon: "success",
                title: "Removed from Favorites",
                timer: 800,
                showConfirmButton: false,
                position: "top"
            });

        } catch (error) {
            console.error(error);
            Swal.fire("Failed to remove!");
        }
    };

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
        <>
            <div className='text-center text-bold'>
                <Fade direction="left" triggerOnce>
                    <h1 className="text-2xl md:text-4xl font-bold text-center mx-auto pb-10 flex justify-center gap-2 mt-10">
                        <FaUserAlt className="text-[#d319a4] mt-1" />
                        <span className="text-[#059ca1]">
                            <Typewriter
                                words={['My Favorite Card Details:']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                </Fade>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gallery.map(promise => <FavoriteDetails key={promise._id} promise={promise}
                        onDeleted={handleRemoveFromGallery}

                    ></FavoriteDetails>)
                }
            </div>
        </>



        //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        //     {
        //       gallery.map((promise) =>
        //         <FavoriteDetails key={promise._id} promise={promise} />)}


        //   </div>
    );
};

export default MyFavorites;

