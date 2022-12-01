import React from 'react'

export default function Films(props) {
    return (

        <div className="h-full mt-5 mr-2 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            <div style={{ background: `url(${props.phim.hinhAnh}),url(https://picsum.photos/1000/300)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <img src={props.phim.hinhAnh} alt={props.phim.tenPhim} style={{ height: '400px', width: '100%' }} className='opacity-0' />
            </div>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-3 h-16 ">{props.phim.tenPhim}</h1>
            <p className="leading-relaxed mb-3 h-16">{props.phim.moTa.length > 100 ? <span>{props.phim.moTa.slice(0, 100)}...</span> : props.phim.moTa}</p>
            <a className="text-indigo-500 inline-flex items-center ">Đặt vé
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </a>

        </div>

    )
}
