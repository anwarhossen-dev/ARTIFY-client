

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
import AllArtworks from "../Pages/Dashbord/AllArtworks";
import Overview from "../Pages/Dashbord/Admin/Overview";
import Analytics from "../Pages/Dashbord/Admin/Analytics";
import Profile from "../Pages/Dashbord/Profile";
import Settings from "../Pages/Dashbord/Admin/Settings";
import Artists from "../Pages/Dashbord/Artist/Artists";
import SalesOrders from "../Pages/Dashbord/Artist/SalesOrders";
import AddArtworks from "../Pages/Dashbord/Artist/AddArtworks";
import MyOrders from "../Pages/Dashbord/User/MyOrders";
import MyReviews from "../Pages/Dashbord/User/MyReviews";
import Favorites from "../Pages/Dashbord/User/Favorites";
import ManageUsers from "../Pages/Dashbord/Admin/ManageUsers";
import ManageRequests from "../Pages/Dashbord/Admin/ManageRequests";

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
                element: <ArtworkDetails />
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


    // /* DASHBOARD */
    // {
    //     path: "/dashboard",
    //     element: (
    //         <PrivateRoute>
    //             <DashboardLayout />
    //         </PrivateRoute>
    //     ),
    //     children: [
    //         { index: true, element: <Overview /> },
    //         {
    //             path: "/dashboard/artworks",
    //             element: <AllArtworks />
    //         },
            
    //         { path: '/dashboard/artists', element: <Artists /> },
    //         { path: '/dashboard/sales', element: <SalesOrders /> },
    //         { path: '/dashboard-admin/analytics', element: <Analytics /> },
    //         { path: '/dashboard/manage-users', element: <ManageUsers /> },
    //         { path: '/dashboard/manage-requests', element: <ManageRequests /> },
    //         { path: '/dashboard/my-profile', element: <Profile /> },
    //         { path: '/dashboard/settings', element: <Settings /> },
    //         //artist
    //         { path: '/dashboard/artists', element: <Artists /> },
    //         { path: "/dashboard/add-artwork", element: <AddArtworks />},
    //         { path: '/dashboard/sales', element: <SalesOrders /> },
    //         // user
    //         { path: '/dashboard/my-orders', element: <MyOrders /> },
    //         { path: '/dashboard/my-reviews', element: <MyReviews/> },
    //         { path: '/dashboard/favorites', element: <Favorites /> },
    //     ],
    // },

    {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      { index: true, element: <Overview /> },
      { path: "my-Profile", element: <Profile /> },
      { path: "my-Orders", element: <MyOrders /> },
      { path: "my-Reviews", element: <MyReviews /> },
      { path: "favorites", element: <Favorites /> },
      { path: "add-artwork", element: <AddArtworks /> },
      { path: "Artists", element: <Artists /> },
      { path: "sales", element: <SalesOrders /> },
      { path: "Overview", element: <Overview /> },
      { path: "manage-users", element: <ManageUsers /> },
      { path: "manage-requests", element: <ManageRequests /> },
      { path: "analytics", element: <Analytics /> },
      { path: "all-artworks", element: <AllArtworks /> },
      { path: "settings", element: <Settings /> },
    ]
  }
]);
export default router;