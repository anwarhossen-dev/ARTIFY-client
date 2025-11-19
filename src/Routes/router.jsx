

import { createBrowserRouter } from "react-router";
// import AddArtwork from "../Pages/AddArtwork/AddArtwork";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound/NotFound";
import ExploreArtworks from "../Pages/Explore/ExploreArtworks";
import PrivateRoute from "../Providers/PrivateRoute";
import ArtworkDetails from "../Pages/ArtworkDetails/ArtworkDetails";
import MyGallery from "../Pages/MyGallery/MyGallery";
import MyGalleryDetails from "../Components/MyGalleryDetails";
import MyFavoriteDetails from "../Pages/MyFavoriteDetails/MyFavoriteDetails";
import UpdatedArtwork from "../Pages/UpdatedArtwork/UpdatedArtwork";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";
import AuthProvider from "../Providers/AuthProvider";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddArtwork from "../Pages/AddArtwork/AddArtwork";
import Home from "../Pages/Home/Home";
import axios from "axios";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout></MainLayout>,
            errorElement: <NotFound></NotFound>,
            children: [
                // {
                //     index: '/',
                //     element:<Home></Home>,
                //     //loader: ()=> axios('http://localhost:3000/latest-addArtwork')


                // },
                {
                    index: '/',
                    element: <Home />,
                    loader: async () => {
                        const res = await axios.get('https://artify-server-six.vercel.app/latest-addArtwork');
                        return res.data;   
                    }
                },
                {
                    path: "/explore-artworks",
                    element: <ExploreArtworks></ExploreArtworks>
                },
                {
                    path: "/add-artwork",
                    element: <PrivateRoute><AddArtwork></AddArtwork></PrivateRoute>,

                },
                {
                    path: "/artwork-details/:id",
                    element: <PrivateRoute><ArtworkDetails></ArtworkDetails></PrivateRoute>,

                },
                {
                    path: "/my-gallery",
                    element: <PrivateRoute><MyGallery></MyGallery></PrivateRoute>
                },
                {
                    path: "/my-gallery-details/:id",
                    element: <PrivateRoute><MyGalleryDetails></MyGalleryDetails></PrivateRoute>
                },
                {
                    path: "/my-favortie-details/:id",
                    element: <PrivateRoute><MyFavoriteDetails></MyFavoriteDetails></PrivateRoute>
                },
                {
                    path: "/updated-artwork/:id",
                    loader: ({ params }) => axios(`https://artify-server-six.vercel.app/addArtwork/${params.id}`),
                    element: <PrivateRoute><UpdatedArtwork></UpdatedArtwork></PrivateRoute>
                },
                {
                    path: "/my-favorites",
                    element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
                }
            ]

        },
        // ✅ ADD THESE TWO ROUTES HERE
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },

        // {
        //     path: "/auth",
        //     element: <AuthProvider />,
        //     children: [
        //         {
        //             path: "/auth/login",
        //             element: <Login></Login>
        //         },
        //         {
        //             path: "/auth/register",
        //             element: <Register></Register>
        //         }
        //     ]
        // }
    ]
)

export default router;