import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from './data'

const Grid = () => {
  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({ id, title, description, img, imgClassName, className, titleClassName, spareImg }) => (
          <BentoGridItem title={title} id={id} key={id} description={description} className={className} img={img} imgClassName={imgClassName}
            titleClassName={titleClassName} spareImg={spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
