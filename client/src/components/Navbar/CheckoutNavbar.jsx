import React from 'react';
import {AiOutlineArrowLeft} from 'react-icons/ai';

// Redux
import {useSelector} from 'react-redux';

function CheckoutNavbar(props) {
    const reduxState = useSelector((globalState)=>globalState.user.user.user);

    return (
        <>
            <nav className='p-4 flex bg-white shadow-md w-full items-center'>
                <div className='container px-4 md:px-20 mx-auto'>
                    <div className='flex items-center justify-between w-full'>
                        <AiOutlineArrowLeft />
                        <div className='w-28'>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='Logo' className='w-full h-full' />
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border p-2 border-gray-300 text-zomato-400 w-12 h-12 rounded-full'>
                                <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' alt={reduxState?.email} className='w-full h-full rounded-full object-cover' />
                            </div>
                            {reduxState?.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CheckoutNavbar
