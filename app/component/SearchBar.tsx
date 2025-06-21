// components/SearchBar.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PageData } from '../data/PageData';
import loupe from '../../assets/loupe.png'

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredPages = PageData.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      <img src={loupe} alt="" />
      <input
        type="text"
        placeholder="Rechercher une page"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input input-bordered w-48 sm:w-64 text-white"
      />
      {query && (
        <ul className="absolute mt-2 z-10 bg-white text-black w-full rounded shadow">
          {filteredPages.length ? (
            filteredPages.map((page, index) => (
              <li
                key={index}
                onClick={() => router.push(page.path)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {page.title}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">Aucune page trouvée</li>
          )}
        </ul>
      )}
    </div>
  );
}