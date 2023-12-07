import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import AddArticleForm from "./AddArticleForm";
import Article from "./Article";

const App = () => {
  const initialArticles = [
    {
      id: uuidv4(),
      author: "Abel",
      title: "His mother has taught him",
      description:
        "His mother had always taught him not to ever think himself as better than others. He's tried to live by this motto. He never...",
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
    },
    {
      id: uuidv4(),
      author: "Abenezer",
      title: "He was an expert but not in a discipline",
      description:
        "He was an expert but not in discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the ...",
      imageUrl:
        "https://d150u0abw3r906.cloudfront.net/wp-content/uploads/2021/10/image2-2-1024x649.png"
    },
    {
      id: uuidv4(),
      author: "Adona",
      title: "Dave watched as the forest burned up on the",
      description:
        "Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and ...",
      imageUrl:
        "https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6_3x2.jpg"
    }
  ];

  const [articles, setArticles] = useState(initialArticles);

  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");

  const handleNewAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewDescriptionChange = (event) => {
    setNewDescription(event.target.value);
  };

  const handleNewImageUrlChange = (event) => {
    setNewImageUrl(event.target.value);
  };

  const handleAddArticle = (event) => {
    event.preventDefault();

    const newArticle = {
      id: uuidv4(),
      author: newAuthor,
      title: newTitle,
      description: newDescription,
      imageUrl: newImageUrl
    };

    setArticles([...articles, newArticle]);

    setNewAuthor("");
    setNewTitle("");
    setNewDescription("");
    setNewImageUrl("");
  };

  const handleDeleteArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
  };

  return (
    <div className="App">
      <header>
        <h1>Abrham's Blog</h1>
      </header>
      <div className="content">
        <div className="cards">
          {articles.map((article) => (
            <Article
              key={article.id}
              article={article}
              author={article.author}
              description={article.description}
              onDelete={handleDeleteArticle}
            />
          ))}
        </div>

        <AddArticleForm
          newAuthor={newAuthor}
          newTitle={newTitle}
          newDescription={newDescription}
          newImageUrl={newImageUrl}
          onAuthorChange={handleNewAuthorChange}
          onTitleChange={handleNewTitleChange}
          onDescriptionChange={handleNewDescriptionChange}
          onImageUrlChange={handleNewImageUrlChange}
          onAddArticle={handleAddArticle}
        />
      </div>
    </div>
  );
};

export default App;
