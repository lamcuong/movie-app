import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineLoading } from 'react-icons/ai'

export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (<Fragment>
        {isLoading ? <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(255,255,255,.5)', zIndex: '99', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }} >
            <div className='text-4xl  '>
                <img className=' m-auto bg-transparent' src={require('../../assets/imgLoading/loading-46-unscreen.gif')} />
            </div>
        </div> : ''}
    </Fragment>

    )
}
