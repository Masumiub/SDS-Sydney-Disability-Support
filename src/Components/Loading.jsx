import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <span className="loading loading-spinner text-[#6B2B77] text-4xl"></span>
            </div>
        </div>
    );
};

export default Loading;