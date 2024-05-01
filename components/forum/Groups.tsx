import React from 'react'
import GroupComponent from '../ui/group'
import group1 from "../../public/images/group1.png"
import group2 from "../../public/images/group2.png"
import group3 from "../../public/images/group3.png"

function Groups() {
    return (
        <div className='mt-12'>
            <h1 className='title-text mb-6'>
                Trending Groups
            </h1>
            <div className='flex flex-col gap-4'>
                <GroupComponent image={group1.src} title="Trekking Union" members='133k' />
                <GroupComponent image={group2.src} title="Scenario Photography" members='127k' />
                <GroupComponent image={group3.src} title="Memories" members='94k' />
            </div>
        </div>
    )
}

export default Groups
