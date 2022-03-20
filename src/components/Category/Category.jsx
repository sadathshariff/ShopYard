import "./Category.css";
export const Category = ({ title, imageUrl }) => {
  return (
    <>
      <div className="categories-info">
        <img className="img-md round-img" src={imageUrl} alt={title} />
        <p className="small-text-2 gray-text">{title}</p>
      </div>
    </>
  );
};
