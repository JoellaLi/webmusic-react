import React from "react"
import { Redirect } from "react-router-dom"
const Discover = React.lazy( ()=>import("@/pages/discover"))
const Recommend = React.lazy(()=>import("@/pages/discover/c-pages/recommend"))
const TopList = React.lazy(()=>import("@/pages/discover/c-pages/toplist"))
const PlayList = React.lazy(()=>import("@/pages/discover/c-pages/playlist"))
const Djradio = React.lazy(()=>import("@/pages/discover/c-pages/djradio"))
const Artist = React.lazy(()=>import("@/pages/discover/c-pages/artist"))
const Album = React.lazy(()=>import("@/pages/discover/c-pages/album"))
const Player = React.lazy(()=>import("@/pages/discover/c-pages/player"))
const Mine = React.lazy(()=>import("@/pages/mine"))
const Friend = React.lazy(()=>import("@/pages/friend"))
const Download = React.lazy(()=>import("@/pages/download"))


const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover"/>
    }
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend"/>
        }
      },
      {
        path: "/discover/recommend",
        component: Recommend
      },
      {
        path: "/discover/toplist",
        component: TopList
      },
      {
        path: "/discover/playlist",
        component: PlayList
      },
      {
        path: "/discover/djradio",
        component: Djradio
      },
      {
        path: "/discover/artist",
        component: Artist
      },
      {
        path: "/discover/album",
        component: Album
      },
      {
        path: "/discover/player",
        component: Player
      }
    ]
  },
  {
    path: "/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  },
  {
    path: "/download",
    component: Download
  }
]

export default routes