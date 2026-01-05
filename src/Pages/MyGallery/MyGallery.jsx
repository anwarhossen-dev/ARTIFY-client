

import React, { useContext, useEffect, useState } from 'react';
//import { AuthContext } from '../../Providers/AuthContext';
import UpdateGallery from '../../Components/UpdateGallery'; // make sure this is your card component
import axios from 'axios';
import LoadingSpinner from '../../Components/LoadingSpinner';
import { Fade } from 'react-awesome-reveal';
import { FaUserAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../../Providers/AuthProvider';

const MyGallery = () => {
  const { user } = useContext(AuthContext);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`https://artify-server-six.vercel.app/my-gallery?email=${user.email}`)
      .then(res => {
        setGallery(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
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
                words={['My Favorite Art Collection – Explore, Enjoy & Showcase Your Creativity:']}
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
        {gallery.length > 0 ? (
          gallery.map(item => <UpdateGallery key={item._id} promise={item} />)
        ) : (
          <p className="text-center text-xl col-span-full">
            You have not added any artworks yet.
          </p>
        )}
      </div>
    </>

  );
};

export default MyGallery;

