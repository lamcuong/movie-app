import _ from 'lodash'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { USER_LOGIN } from '../../../../util/settings/config'

export default function Header() {
    const navigate = useNavigate()
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)
    const activeStyle = {
        borderBottom: '2px solid white'
    }
    const renderLogin = () => {
        console.log(_.isEmpty(userLogin))
        console.log({ userLogin })
        if (_.isEmpty(userLogin)) {

            return <div className="items-center flex-shrink-0 hidden lg:flex">
                <button onClick={() => {
                    navigate('login')
                }} className="self-center px-8 py-3 rounded">Đăng nhập</button>
                <button onClick={() => {
                    navigate('signup')
                }} className="self-center px-8 py-3 rounded dark:bg-violet-400 dark:text-gray-900">Đăng ký</button>
            </div>
        }

        return <p className='flex justify-center items-center'>
            Xin chào ! {userLogin.hoTen}
        </p>



    }
    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100 bg-black bg-opacity-40 w-full text-white fixed z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <a href='#' onClick={() => {
                    navigate('/')
                }} aria-label="Back to homepage" className="flex items-center p-2">
                    <img src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">


                </ul>

                {renderLogin()}

                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
