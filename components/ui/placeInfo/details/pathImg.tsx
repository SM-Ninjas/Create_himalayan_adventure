import Image from 'next/image'

import React from 'react'

interface pathImageTypes {
    pathImg: string
}
function PathImg(pathImg: pathImageTypes) {
    return (
        <div className='mt-4'>
            <Image src={pathImg.pathImg} height={400} width={800} alt='myimg' />
        </div>
    )
}

export default PathImg
