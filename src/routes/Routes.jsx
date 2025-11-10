import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import ExploreArtworks from '../Pages/Explore/ExploreArtworks';
import ArtworkDetails from '../Pages/ArtworkDetails/ArtworkDetails';
import AddArtwork from '../Pages/AddArtwork/AddArtwork';
import PrivateRoute from '../Layouts/PrivateRoute';




export const Router = createBrowserRouter(
    [
        {
            index: "/",
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path: "/explore",
                    element: <ExploreArtworks/>,
                },
                {
                    path: "/",
                    element: <ArtworkDetails/>

                },
                 {
        path: "add-artwork",
        element: (
          <PrivateRoute>
            <AddArtwork />
          </PrivateRoute>
        ),
      },
      ]
     
     }
    ]
)