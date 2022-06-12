import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink';

const Navbar = () => {
    const menu = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>
        <li tabindex="0">
            <CustomLink to='1'>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </CustomLink>
            <ul class="p-2 bg-primary z-10">
                <li><CustomLink to='1/1'>Submenu 1</CustomLink></li>
                <li><CustomLink to='1/2'>Submenu 2</CustomLink></li>
            </ul>
        </li>
        <li tabindex="0">
            <CustomLink to='menu2'>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </CustomLink>
            <ul class="p-2 bg-primary z-10">
                <li><CustomLink to='1'>Submenu 1</CustomLink></li>
                <li><CustomLink to='2'>Submenu 2</CustomLink></li>
            </ul>
        </li>
        <li><CustomLink to='/contact' >Contact</CustomLink></li>
        <li><CustomLink to={'5'}>Admission</CustomLink></li>
        <li><CustomLink to={'6'}>Gallery</CustomLink></li>
    </>
    return (
        <div className=''>
            <div class="navbar bg-primary text-primary-content">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* ---------- Menu on small screen --------- */}
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Logo</Link>
                </div>
                {/* ---------- Menu on lg screen -----------*/}
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
                {/*------------ Search ---------------*/}
                <div class="navbar-end">
                    <div class="flex gap-2">
                        <div class="form-control">
                            <input type="text" placeholder="Search" class="input input-bordered" />
                        </div>
                        <button class="btn btn-ghost btn-circle border-2 hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;