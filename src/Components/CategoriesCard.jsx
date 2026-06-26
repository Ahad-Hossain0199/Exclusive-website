import React from 'react'

const CategoriesCard = ({ icon, title }) => {
    return (
        <>
            <div className='w-42.5 h-36.25 border-secondary/20 rounded-sm border-2 flex flex-col items-center justify-center hover:bg-red-400  duration-500 linear cursor-pointer group '>
                <div className='text-[56px] group-hover:text-white'>
                    {icon}
                </div>
                <h3 className='font-normal text-[16px] text-secondary group-hover:text-white'>{title}</h3>
            </div>

        </>
    )
}

export default CategoriesCard
