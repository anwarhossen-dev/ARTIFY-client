import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import FavoriteDetails from '../../Components/FavoriteDetails';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import Swal from 'sweetalert2';

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
            .get(`http://localhost:3000/my-favoriteArt?email=${user.email}`)
            .then(res => {
                setGallery(res.data);
                setLoading(false); // Stop loading
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [user]);



    // const handleRemoveFromGallery = (id) => {
    //     setGallery(prev => prev.filter(item => item._id !== id));
    // };

    const handleRemoveFromGallery = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/favoriteArt/${id}`);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                gallery.map(promise => <FavoriteDetails key={promise._id} promise={promise}
                    onDeleted={handleRemoveFromGallery}

                ></FavoriteDetails>)
            }
        </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {
    //       gallery.map((promise) =>
    //         <FavoriteDetails key={promise._id} promise={promise} />)}


    //   </div>
    );
};

export default MyFavorites;

