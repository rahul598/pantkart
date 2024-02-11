import Image from "next/image"
const products = [
    {
      id: 1,
      name: 'Hangup Men Formal Solid Suits',
      href: '#',
      imageSrc: '/product-1.jpeg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '₹2699',
      color: '(61% Off )',
    },
    {
        id: 2,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-2.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      }, 
      {
        id: 3,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-3.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      },
      {
        id: 4,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-4.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      }, 
      {
        id: 5,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-5.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      }, 
      {
        id: 6,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-6.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      }, 
      {
        id: 7,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-7.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      },
      {
        id: 8,
        name: 'Hangup Men Party Printed Suits',
        href: '#',
        imageSrc: '/product-1.jpeg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '₹2699',
        color: '(61% Off )',
      },                                        
    // More products...
  ]
  
  export default function product() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                    <div style={{ width: '100%', height: '100%' }}>
                    <Image className="position-relative" 
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    objectFit="inherit"
                    />
                </div>                                 
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  