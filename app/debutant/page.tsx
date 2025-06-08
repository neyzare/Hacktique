function DebutantPage() {
  return (
    <div className="flex flex-col lg:flex-row max-w-9xl mx-auto p-6">
      {/* Sidebar à gauche */}
      <aside className="w-full lg:w-64 mb-8 lg:mb-0 border-r lg:pr-6 text-sm">
        <h2 className="text-lg font-semibold mb-4">Chapitres</h2>
        <ul className="space-y-2">
          <li><a href="#intro" className="hover:underline">1. Introduction</a></li>
          <li>
            <
            ul className="ml-4 mt-1 space-y-1 text-gray-400">
              <li><a href="#injection" className="hover:underline">- Injection</a></li>
              <li><a href="#xss" className="hover:underline">- XSS</a></li>
            </ul>
          </li>
          <li><a href="#conclusion" className="hover:underline">3. Conclusion</a></li>
        </ul>
      </aside>

      {/* Contenu principal à droite */}
      <div className="flex-1 lg:pl-3">
        <h1 className="text-3xl font-bold mb-">Injection SQL</h1>
       <p className="pt-6 font-medium text-lg">Introduction</p>
       <p className="break-all">
        L’injection SQL, ou SQL Injection, est l’une des failles de sécurité web les plus connues et les plus dangereuses. Elle permet à un attaquant d’interagir directement avec la base de données d’un site web en modifiant des requêtes SQL via des champs mal sécurisés, comme un formulaire de connexion. <br />
        Concrètement, cela signifie qu’en tapant une commande spéciale dans un simple champ de texte (comme un champ “nom d’utilisateur”), un pirate peut contourner l’authentification, voler des données sensibles, ou même supprimer des tables entières… si le site n’est pas protégé.
<br />

       </p>
      </div>
    </div>
  );
}

export default DebutantPage;