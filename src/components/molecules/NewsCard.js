function NewsCard({ title, date, content }) {
  return (
    <article className="card h-100">
      <div className="card-body">
        <h3 className="card-title h5">
          {title}
        </h3>

        <p className="text-muted">
          {date}
        </p>

        <p className="card-text">
          {content}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;