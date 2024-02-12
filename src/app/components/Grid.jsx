
import Image from "next/image"
const Grid = () => {
  return (
    <div className="container mx-auto">
    <h2 className="text-2xl text-gray-900 p-2">Catlogue</h2> 
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <div className="space-y-2">
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-3.jpeg"
        alt="Image Description"
      />
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-4.jpeg"
        alt="Image Description"
      />
    </div>
    <div className="space-y-2">
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-2.jpeg"
        alt="Image Description"
      />
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-1.jpeg"
        alt="Image Description"
      />
    </div>
    <div className="space-y-2">
      <img
        className="w-full h-auto object-cover"
        src="/grid-2.jpeg"
        alt="Image Description"
      />
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-3.jpeg"
        alt="Image Description"
      />
      <img
        className="w-full h-auto object-cover"
        src="/grid-4.jpeg"
        alt="Image Description"
      />
    </div>
    <div className="space-y-2">
      <img
        className="w-full h-auto object-cover"
        src="/catlouge-2.jpeg"
        alt="Image Description"
      />
      <img
        className="w-full h-auto object-cover"
        src="/grid-c-8.jpeg"
        alt="Image Description"
      />
    </div>
  </div>
  
    </div>
  )
}

export default Grid