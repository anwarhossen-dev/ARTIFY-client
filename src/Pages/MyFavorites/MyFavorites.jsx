import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthContext';
import FavoriteDetails from '../../Components/FavoriteDetails';
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';

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

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`http://localhost:3000/my-favoriteArt?email=${user.email}`)
            .then(res => setGallery(res.data))
            .catch(err => console.error(err));
        setLoading(false);
    }, [user]);



    const handleRemoveFromGallery = (id) => {
        setGallery(prev => prev.filter(item => item._id !== id));
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
        <div className='w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
                gallery.map(promise => <FavoriteDetails key={promise._id} promise={promise}
                    onDeleted={handleRemoveFromGallery}

                ></FavoriteDetails>)
            }
        </div>
    );
};

export default MyFavorites;

