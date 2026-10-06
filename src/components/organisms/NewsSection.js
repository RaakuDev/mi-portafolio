import newsData from '../../data/news.json';
import NewsCard from '../molecules/NewsCard';

function NewsSection() {
  return (
    <section id="noticias" className="py-5">
      <h2 className="mb-4">Noticias</h2>

      <div className="row g-4">
        {newsData.map((news) => (
          <div
            className="col-12 col-md-6"
            key={news.id}
          >
            <NewsCard
              title={news.title}
              date={news.date}
              content={news.content}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsSection;