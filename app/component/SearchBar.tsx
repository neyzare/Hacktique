'use client';

import { useState } from 'react';
import Loupe from '../../assets/loupe.svg';
import { useRouter } from 'next/navigation';
import { PageData } from '../data/PageData';
import Image from 'next/image';

export default function SearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const filteredPages = PageData.filter((page) =>
    page.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative flex items-center">
      {/* Loupe, clic dessus pour afficher l'input */}
      <button
        onClick={() => setShowInput((prev) => !prev)}
        aria-label="Ouvrir la barre de recherche"
        className="p-1"
      >
         <Image
        src={Loupe}
        alt="loupe"
        width={20}
        height={20}
      />
      </button>

      {/* Barre de recherche qui s'affiche uniquement quand showInput est vrai */}
      {showInput && (
        <div className="relative">
          <input
            autoFocus
            type="text"
            placeholder="Rechercher une page"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input input-bordered w-48 sm:w-64 text-white ml-2"
          />
          {query && (
            <ul className="absolute mt-2 z-10 bg-white text-black w-full rounded shadow max-h-60 overflow-auto">
              {filteredPages.length ? (
                filteredPages.map((page, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      router.push(page.path);
                      setShowInput(false); // ferme la recherche après clic
                      setQuery('');
                    }}
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
      )}
    </div>
  );
}