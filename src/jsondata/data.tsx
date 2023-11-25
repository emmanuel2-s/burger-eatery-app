import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { BsFillSaveFill } from 'react-icons/bs'
import { AiFillTag } from 'react-icons/ai';

export const sideBarNav = [
    {
        icon: <TbTruckDelivery size={25} />,
        name: "Orders",
    },
    {
        icon: <MdFavorite size={25} />,
        name: "Favorites",
    },
    {
        icon: <FaWallet size={25} />,
        name: "Wallet",
    },
    {
        icon: <MdHelp size={25} />,
        name: "Help",
    },
    {
        icon: <AiFillTag size={25} />,
        name: "Promotions",
    },
    {
        icon: <BsFillSaveFill size={25} />,
        name: "Best Ones",
    },
    {
        icon: <FaUserFriends size={25} />,
        name: "Invite Friends",
    },

];

