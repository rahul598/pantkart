import Image from "next/image"
const catlogue = [
    {
      name: "wedding",
      imageSrc: '/catlouge-1.jpeg',
      imageAlt: 'Category-1',
      href: '#',
    }, 
    {
        name: "party",
        imageSrc: '/catlouge-2.jpeg',
        imageAlt: 'Category-2',
        href: '#',
      },  
      {
        name: "Occasion",
        imageSrc: '/catlouge-3.jpeg',
        imageAlt: 'Category-3',
        href: '#',
      },
      {
        name: "b-party",
        imageSrc: '/catlouge-4.jpeg',
        imageAlt: 'Category-4',
        href: '#',
      }                                            
  ]
  
  export default function Collection() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-8">
          <h2 className="text-2xl text-gray-900">OCCASIONAL</h2>  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {catlogue.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 lg:aspect-w-1 group-hover:opacity-75">
                        <div style={{ width: '100%', height: '100%' }}>
                        <Image className="position-relative" 
                        src={callout.imageSrc}
                        alt={callout.imageAlt}
                        layout="fill"
                        />                    
                        </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  