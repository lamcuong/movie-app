import React, { useEffect } from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/settings/config'

export default function CheckOutTemplate(props) {


    if (!localStorage.getItem(USER_LOGIN)) {

        return <Navigate to='/login' replace={true} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}
