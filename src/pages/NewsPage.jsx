import { useEffect, useState } from "react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=wktnMbF1X1NsTpTTyD5SFSoNn2AkvuOs`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">World News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.url}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={article.multimedia?.[0]?.url}
              alt={article.title}
              className="h-40 w-full object-cover rounded-t-lg" // Ubah tinggi gambar jadi 10rem (160px)
              style={{ height: "160px" }} // Gambar lebih besar
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.abstract}</p>
              <a
                href={article.url}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
