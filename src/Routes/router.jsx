

// import { createBrowserRouter } from "react-router";
// // import AddArtwork from "../Pages/AddArtwork/AddArtwork";
// import MainLayout from "../Layouts/MainLayout";
// import NotFound from "../Pages/NotFound/NotFound";
// import ExploreArtworks from "../Pages/Explore/ExploreArtworks";
// import PrivateRoute from "../Providers/PrivateRoute";
// import ArtworkDetails from "../Pages/ArtworkDetails/ArtworkDetails";
// import MyGallery from "../Pages/MyGallery/MyGallery";
// import MyGalleryDetails from "../Components/MyGalleryDetails";
// import MyFavoriteDetails from "../Pages/MyFavoriteDetails/MyFavoriteDetails";
// import UpdatedArtwork from "../Pages/UpdatedArtwork/UpdatedArtwork";
// import MyFavorites from "../Pages/MyFavorites/MyFavorites";
// import AuthProvider from "../Providers/AuthProvider";
// import Login from "../Pages/Auth/Login";
// import Register from "../Pages/Auth/Register";
// import AddArtwork from "../Pages/AddArtwork/AddArtwork";
// import Home from "../Pages/Home/Home";
// import axios from "axios";
// import Dashboard from "../Layouts/DashbordLayout";
// import DashboardLayout from "../Layouts/DashbordLayout";

// const router = createBrowserRouter(
//     [
//         {
//             path: "/",
//             element: <MainLayout></MainLayout>,
//             errorElement: <NotFound></NotFound>,
//             children: [
//                 // {
//                 //     index: '/',
//                 //     element:<Home></Home>,
//                 //     //loader: ()=> axios('http://localhost:3000/latest-addArtwork')


//                 // },
//                 {
//                     index: '/',
//                     element: <Home />,
//                     loader: async () => {
//                         const res = await axios.get('https://artify-server-six.vercel.app/latest-addArtwork');
//                         return res.data;
//                     }
//                 },
//                 {
//                     path: "/explore-artworks",
//                     element: <ExploreArtworks></ExploreArtworks>
//                 },
//                 {
//                     path: "/add-artwork",
//                     element: <PrivateRoute><AddArtwork></AddArtwork></PrivateRoute>,

//                 },
//                 {
//                     path: "/artwork-details/:id",
//                     element: <PrivateRoute><ArtworkDetails></ArtworkDetails></PrivateRoute>,

//                 },
//                 {
//                     path: "/my-gallery",
//                     element: <PrivateRoute><MyGallery></MyGallery></PrivateRoute>
//                 },
//                 {
//                     path: "/my-gallery-details/:id",
//                     element:<MyGalleryDetails></MyGalleryDetails>
//                 },
//                 {
//                     path: "/my-favortie-details/:id",
//                     element: <PrivateRoute><MyFavoriteDetails></MyFavoriteDetails></PrivateRoute>
//                 },
//                 // {
//                 //     path: "/updated-artwork/:id",
//                 //     loader: ({ params }) => axios(`https://artify-server-six.vercel.app/addArtwork/${params.id}`),
//                 //     element: <PrivateRoute><UpdatedArtwork></UpdatedArtwork></PrivateRoute>
//                 // },
//                 {
//                     path: "/updated-artwork/:id",
//                     loader: async ({ params }) => {
//                         const res = await axios.get(`https://artify-server-six.vercel.app/addArtwork/${params.id}`);
//                         return res.data;
//                     },
//                     element: <PrivateRoute><UpdatedArtwork /></PrivateRoute>
//                 }, 
//                 {
//                     path: "/my-favorites",
//                     element: <PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
//                 }
//             ]

//         },
//         // ✅ ADD THESE TWO ROUTES HERE
//         { path: "/auth/login", element: <Login /> },
//         { path: "/auth/register", element: <Register /> },
//     ],
// [
//     {
//         path: "/dashboard",
//         element: <DashboardLayout></DashboardLayout>
//     }
// ]
// )

// export default router;


import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
//import DashboardLayout from "../Layouts/DashboardLayout"; // Renamed for clarity
import NotFound from "../Pages/NotFound/NotFound";
import ExploreArtworks from "../Pages/Explore/ExploreArtworks";
import PrivateRoute from "../Providers/PrivateRoute";
import ArtworkDetails from "../Pages/ArtworkDetails/ArtworkDetails";
import MyGallery from "../Pages/MyGallery/MyGallery";
import MyGalleryDetails from "../Components/MyGalleryDetails";
import MyFavoriteDetails from "../Pages/MyFavoriteDetails/MyFavoriteDetails";
import UpdatedArtwork from "../Pages/UpdatedArtwork/UpdatedArtwork";
import MyFavorites from "../Pages/MyFavorites/MyFavorites";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddArtwork from "../Pages/AddArtwork/AddArtwork";
import Home from "../Pages/Home/Home";
import axios from "axios";
import DashboardLayout from "../Layouts/DashbordLayout";
import Overview from "../Pages/Dashbord/Overview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const res = await axios.get('https://artify-server-six.vercel.app/latest-addArtwork');
          return res.data;
        }
      },
      {
        path: "explore-artworks",
        element: <ExploreArtworks />
      },
      {
        path: "add-artwork",
        element: <PrivateRoute><AddArtwork /></PrivateRoute>
      },
      {
        path: "artwork-details/:id",
        element: <PrivateRoute><ArtworkDetails /></PrivateRoute>
      },
      {
        path: "my-gallery",
        element: <PrivateRoute><MyGallery /></PrivateRoute>
      },
      {
        path: "my-gallery-details/:id",
        element: <MyGalleryDetails />
      },
      {
        path: "my-favortie-details/:id", // Note: typo in "favortie" → fix to "favorite" later?
        element: <PrivateRoute><MyFavoriteDetails /></PrivateRoute>
      },
      {
        path: "updated-artwork/:id",
        loader: async ({ params }) => {
          const res = await axios.get(`https://artify-server-six.vercel.app/addArtwork/${params.id}`);
          return res.data;
        },
        element: <PrivateRoute><UpdatedArtwork /></PrivateRoute>
      },
      {
        path: "my-favorites",
        element: <PrivateRoute><MyFavorites /></PrivateRoute>
      }
    ]
  },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  
  
  /* DASHBOARD */
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
    //   { path: "artworks", element: <DashboardArtworks /> },
    //   { path: "profile", element: <DashboardProfile /> },
    ],
  },
]);
export default router;