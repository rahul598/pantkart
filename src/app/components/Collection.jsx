import Image from "next/image"
const callouts = [
    {
      name: "Men's Coat",
      description: "Men's Coat Category",
      imageSrc: '/cat-1.jpeg',
      imageAlt: 'Category-1',
      href: '#',
    },
    {
        name: "WOMEN'S COAT",
        description: "WOMEN's Coat Category",
        imageSrc: '/cat-2.jpeg',
        imageAlt: 'Category-2',
        href: '#',
      },
      {
        name: "Traditional KurtaSet",
        description: "Traditional KurtaSet Coat Category",
        imageSrc: '/cat-3.jpeg',
        imageAlt: 'Category-3',
        href: '#',
      },
      {
        name: "Blazer",
        description: "Blazer Coat Category",
        imageSrc: '/cat-4.jpeg',
        imageAlt: 'Category-4',
        href: '#',
      }                      
  ]
  
  export default function Collection() {
    return (
      <div className="">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-4 sm:py-8 lg:max-w-none lg:py-8">
          <h2 className="text-2xl text-gray-900">Deal of the Day</h2>  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
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
                  <h3 className="mt-6 text-base text-center text-gray-900">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  