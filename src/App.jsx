import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    content: "",
    category: "News",
    published: false,
  });
  const [articles, setArticles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setArticles([...articles, formData]);
    setFormData({
      title: "",
      image: "",
      content: "",
      category: "News",
      published: false,
    });
  };
  const handleDelete = (index) => {
    const newArticles = [...articles];
    newArticles.splice(index, 1);
    setArticles(newArticles);
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center">Gestione Articoli Blog</h1>
        <form onSubmit={handleFormSubmit} className="mb-5">
          <div className="row">
          {/* Campo titolo */}
          <div className="mb-3 col-4">
            <label htmlFor="title" className="form-label">
              Titolo dell'articolo
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Titolo dell'articolo"
              className="form-control"
            />
          </div>

          {/* Campo immagine */}
          <div className="mb-3 col-4">
            <label htmlFor="image" className="form-label">
              URL immagine
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="URL immagine"
              className="form-control"
            />
          </div>

          

          {/* Campo categoria */}
          <div className="mb-3 col-4">
            <label htmlFor="category" className="form-label">
              Categoria
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="...">...</option>
              <option value="News">News</option>
              <option value="Technology">Technology</option>
              <option value="Life">Life</option>
            </select>
          </div>
          </div>

          {/* Campo contenuto */}
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Contenuto dell'articolo
            </label>
            <textarea
              name="content"
              id="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Contenuto dell'articolo"
              className="form-control"
              rows="4"
            ></textarea>
          </div>

          {/* Campo pubblicazione */}
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="published"
              id="published"
              checked={formData.published}
              onChange={handleInputChange}
              className="form-check-input"
            />
            <label htmlFor="published" className="form-check-label">
              Pubblica
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Aggiungi
          </button>
        </form>

        <ul className="list-group mt-3">
          {articles.map((article, index) => (
            <li key={index} className="list-group-item">
              <div className="mb-3">
                <h3>{article.title}</h3>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="img-fluid rounded mb-2"
                  />
                )}
                <p>{article.content}</p>
                <p>
                  <strong>Categoria:</strong> {article.category}
                </p>
                <p>
                  <strong>Pubblicato:</strong> {article.published ? "Si" : "No"}
                </p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger btn-sm"
              >
                🗑️ Rimuovi
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
