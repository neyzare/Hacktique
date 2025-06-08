interface ArticleProps {
  title: string;
  description: string;
  url: string;
}

export default function ArticleCard({ title, description, url }: ArticleProps) {
  return (
    <div className="w-full max-w-md p-6 rounded-2xl border border-gray-100 shadow-sm bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-gray-900 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">
          {description}
        </p>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
          >
            Lire l’article ↗
          </a>
        </div>
      </div>
    </div>
  );
}