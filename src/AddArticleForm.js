import React from "react";
const AddArticleForm = ({
  newAuthor,
  newTitle,
  newDescription,
  newImageUrl,
  onAuthorChange,
  onTitleChange,
  onDescriptionChange,
  onImageUrlChange,
  onAddArticle
}) => {
  return (
    <div className="add-artcile">
      <form onSubmit={onAddArticle}>
        <label>
          Author:
          <input
            type="text"
            value={newAuthor}
            onChange={onAuthorChange}
            required
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={newTitle}
            onChange={onTitleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={newDescription}
            onChange={onDescriptionChange}
            required
          ></textarea>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={newImageUrl}
            onChange={onImageUrlChange}
            required
          />
        </label>
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddArticleForm;
