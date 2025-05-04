import Image, { StaticImageData } from "next/image";

interface ArticleProps {
  title: string;
  description: string;
  url: string;
  image: string | StaticImageData;
}

export default function ArticleCard({ title, description, url, image }: ArticleProps) {
  return (
    <div className="flex flex-col justify-between bg-white rounded shadow-md overflow-hidden w-full max-w-sm h-full min-h-[500px] gap-4">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={400}
        height={200}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-full"
        >
          Lire l’article ↗
        </a>
      </div>
    </div>
  );
}