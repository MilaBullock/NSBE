"use client";
import Image from 'next/image';

export default function ExecCard({ photo, name, position, major, year, linkedin }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-[18%] flex-none">
      <div className="w-24 sm:w-28 md:w-32 lg:w-36 h-24 sm:h-28 md:h-32 lg:h-36 mb-3 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image src={photo} alt={`${name} photo`} width={128} height={128} className="object-cover w-full h-full" />
      </div>
      <div className="text-center">
        <div className="font-semibold text-lg text-black">{name}</div>
        <div className="text-sm text-black">{position}</div>
        <div className="text-sm text-black">{major}{year ? ' ' + year : ''}</div>
      </div>
      <a href={linkedin || '#'} target="_blank" rel="noreferrer" className="mt-2 inline-block px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">LinkedIn</a>
    </div>
  );
}
