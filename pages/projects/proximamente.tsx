import React from 'react';
import Image from 'next/image';

import proximamente from "../../public/assets/blog/coming-soon/proximamente.png"

const ComingSoon = () => {

    return (
        <div className='bg-custom-background'>
            <Image
                src={proximamente}
                alt={'proximamente'}
                objectFit='cover'
                className='h-screen w-screen' />
        </div>

    )
}

export default ComingSoon;