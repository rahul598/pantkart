
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'


function Hero(props: { src: string | StaticImport, alt: string, width:number, height:number}) {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}

export default Hero