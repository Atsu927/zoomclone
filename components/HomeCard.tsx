import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HomeCardProps {
    className: string
    img: string
    title: string
    description: string
    handleClick: () => void
}

/**
 * Represents a home card component.
 * @param {string} className - The CSS class name for the component.
 * @param {string} img - The image source for the card.
 * @param {string} title - The title of the card.
 * @param {string} description - The description of the card.
 * @param {Function} handleClick - The click event handler for the card.
 * @returns {JSX.Element} The rendered home card component.
 */
const HomeCard = ({
    className,
    img,
    title,
    description,
    handleClick,
}: HomeCardProps) => {
    return (
        <div
            className={cn(
                'px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
                className
            )}
            onClick={handleClick}
        >
            <div className="flex-center glassmorphism size-12 rounded-[10px]">
                <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-normal">{description}</p>
            </div>
        </div>
    )
}

export default HomeCard
