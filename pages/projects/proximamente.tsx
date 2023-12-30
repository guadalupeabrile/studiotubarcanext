import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import proximamente from "../../public/assets/blog/coming-soon/proximamente.png"
import studiotubarca from "../../public/assets/blog/manifiesto/studiotubarca.png"
import home from '../../public/assets/blog/footer/home-foto.gif'

const ComingSoon = () => {

    return (
        <>
            <div className='w-screen h-screen bg-custom-background'>
                <div>
                    <Image
                        src={proximamente}
                        alt='proximamente'
                        className='w-screen h-screen'
                        fill
                    />
                </div>
                <div className="bottom-0 p-10 absolute w-full flex items-center">
                    <Link as={`/manifiesto`} href={`/manifiesto`} aria-label='studiotubarca manifiesto' className="pt-20">
                        <Image
                            src={studiotubarca}
                            alt='studiotubarca logo'
                            className='hover:shadow-lg transition-shadow duration-200'
                            width={450}
                            height={150}
                        />

                    </Link>
                </div>
                <div className="top-0 p-5 absolute flex justify-end items-center w-full">
                    <Link as={`/`} href={`/`} aria-label='studiotubarca manifiesto' >
                        <Image
                            src={home}
                            alt='studiotubarca Manifiesto'
                            className='hover:shadow-lg transition-shadow duration-200'
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
            </div>
        </>

    )
}

export default ComingSoon;