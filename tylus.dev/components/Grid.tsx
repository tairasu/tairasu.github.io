import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

export const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description, list, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    list={list as []} // Update the type of list to match the expected type
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                    />
            ))}
        </BentoGrid>
    </section>
  )
}
