'use client';
import { AdrenalineWorlds } from '@/src/features/portal/components/AdrenalineWorlds';
import { SlideContent } from '@/src/features/portal/components/SlideContent'
import { MOCK_ANIMALS } from '@/src/features/portal/data/mockAttractions';
import { ZooHero } from '@/src/features/portal/data/mockHeroSlides'
import React from 'react'
function ZooPage() {
    return (
        <main className='mt-[106px]'>
            <div className='h-[80dvh]'>
                <SlideContent slide={ZooHero} isActive={true} />
            </div>
            <div >
                <AdrenalineWorlds title="DreamZoo" attractions={MOCK_ANIMALS} />

            </div>

        </main>
    )
}

export default ZooPage