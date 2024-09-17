"use server"

import { signOut } from 'next-auth/react';
import React from 'react'
import { MdLogout } from 'react-icons/md';

const Logout = () => {
  return (
    <form
        action={async () => {
        //   "use server";
          await signOut();
        }}
        >
          <button 
       //   className={styles.logout}
          >
            <MdLogout />
            <span 
            //className={`${isOpen ? "block" : "hidden"}`} 
            >
            Logout
            </span>
           
          </button>
        </form>
  )
}

export default Logout