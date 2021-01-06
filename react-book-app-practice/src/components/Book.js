function Book(props) {
  return (
    <div className="book-container">
      <h1 className="book-title">{props.title}</h1>
      {/* <h2 className="book-author">{props.author}</h2> */}
      <div className="book-info">
				<img className="book-image" src={props.image} alt="Book" />
				<h3 className="book-description">{props.description}</h3>
			</div>
		</div>
	);
}

export default Book;
