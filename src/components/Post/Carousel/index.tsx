import dynamic from "next/dynamic"
import { Carousel as ReactCarousel } from "react-responsive-carousel"

// const ReactCarousel = dynamic<ReactCarouselType>(
//   () => import("@brainhubeu/react-carousel"),
//   {
//     ssr: false,
//   }
// )

import { FC, useState } from "react"
import styles from "./Carousel.module.css"

export interface CarouselProps {
  images: string[]
}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [value, setValue] = useState(0)
  // if (typeof window === "undefined") {
  //   return null
  // }
  const onChange = (value) => {
    setValue(value)
  }
  return (
    <div className={styles.carousel}>
      <ReactCarousel
        // autoPlay
        renderThumbs={() => null}
        showStatus={false}
        infiniteLoop
      >
        {images.map((img, index) => {
          return (
            <img className={styles.slide} key={`${index}-${img}`} src={img} />
          )
        })}
      </ReactCarousel>
    </div>
  )
}

export default Carousel
