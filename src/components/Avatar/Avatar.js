
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { MA_NGUOI_DUNG, TOKEN, USER_LOGIN } from '../../util/settings/config'
import { AiOutlineUser, AiFillControl, AiOutlineLogout } from 'react-icons/ai';

export default function Avatar() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    useEffect(() => {
        const closeDropdown = (e) => {
            if (e.path[0] !== dropdownRef.current) {
                setOpen(false)
            }


        }
        document.body.addEventListener('click', closeDropdown)
        return () => {
            document.body.removeEventListener('click', closeDropdown)
        }
    }, [])

    return (
        <div className=''>
            <div className=' relative flex flex-col items-center justify-center z-50  ' >
                <div onClick={() => setOpen(!open)} className='  w-14  ml-auto mr-36 '>
                    <img ref={dropdownRef} className='w-full rounded-full cursor-pointer' src='https://thumbs.dreamstime.com/b/user-icon-human-person-symbol-avatar-login-sign-vector-illustration-isolated-modern-background-user-icon-human-person-symbol-118096858.jpg' alt='...' />
                </div>
                <ul className={`absolute bg-white text-black mt-2 overflow-y-auto w-full rounded-lg ${open ? "max-h-60" : "max-h-0"} max-w-xs top-16  right-0 `}
                >
                    <div className='border-b border-gray-300'>
                        <h1 className='capitalize text-center text-xl pt-3 m-0'>{userLogin.hoTen}</h1>
                        <p className='text-center text-md'>{userLogin.email}</p>
                    </div>
                    <div>
                        <NavLink to='/profile' onClick={() => {
                            setOpen(false)
                        }} className=' block  text-black cursor-pointer text-lg pl-3 py-3 hover:bg-gray-300'><span><AiOutlineUser className='inline-block text-2xl mr-4' /></span>Thông tin cá nhân</NavLink>
                        {localStorage.getItem(MA_NGUOI_DUNG) ? <NavLink to='/admin' onClick={() => {
                            setOpen(false)
                        }} className=' block  text-black  cursor-pointer text-lg pl-3 py-3 hover:bg-gray-300'><span><AiFillControl className='inline-block text-2xl mr-4' /></span>Quản lý</NavLink> : <li className='cursor-no-drop bg-gray-200 opacity-80 text-lg pl-3 py-3 '><span className='opacity-80'><AiFillControl className='inline-block text-2xl mr-4 opacity-80' /></span>Quản lý</li>}


                        <li onClick={() => {
                            setOpen(false)

                            localStorage.removeItem(USER_LOGIN);
                            localStorage.removeItem(MA_NGUOI_DUNG);
                            localStorage.removeItem(TOKEN);
                            window.location.reload()


                        }} className='cursor-pointer text-lg pl-3 py-3 hover:bg-gray-300 border-t border-gray-300'><span><AiOutlineLogout className='inline-block text-2xl mr-4' /></span>Đăng xuất</li>
                    </div>

                </ul>
            </div >
        </div>
    )
}




