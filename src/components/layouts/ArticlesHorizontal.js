import "../css/ArticlesHorizontal.css";

const ArticlesHorizontal = () => {
  return (
    <main className="ah-main-container">
      <h1 className="ah-heading">The Latest</h1>
      <hr className="ah-hr" />
      <div className="ah-container">
        <figure className="ah-images-container">
          <img
            className="ah-images"
            src="https://images.pexels.com/photos/2886202/pexels-photo-2886202.jpeg?cs=srgb&dl=pexels-daniel-shi-2886202.jpg&fm=jpg"
            alt="Lake Louise, AB, Canada"
          />
          <figcaption className="ah-images-caption">
            Joshua Tree Overnight Adventure
            <p>
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination. It has a
              plethora of temples and palaces.
            </p>
          </figcaption>
          <p className="ah-images-date">
            <span className="category">Travel</span>
            <span> / October 3 2022</span>
          </p>
        </figure>
        <figure className="ah-images-container">
          <img
            className="ah-images"
            src="https://images.pexels.com/photos/2886202/pexels-photo-2886202.jpeg?cs=srgb&dl=pexels-daniel-shi-2886202.jpg&fm=jpg"
            alt="Lake Louise, AB, Canada"
          />
          <figcaption className="ah-images-caption">
            Joshua Tree Overnight Adventure
            <p>
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination. It has a
              plethora of temples and palaces.
            </p>
          </figcaption>
          <p className="ah-images-date">
            <span className="category">Travel</span>
            <span> / October 3 2022</span>
          </p>
        </figure>
        <figure className="ah-images-container">
          <img
            className="ah-images"
            src="https://images.pexels.com/photos/2886202/pexels-photo-2886202.jpeg?cs=srgb&dl=pexels-daniel-shi-2886202.jpg&fm=jpg"
            alt="Lake Louise, AB, Canada"
          />
          <figcaption className="ah-images-caption">
            Joshua Tree Overnight Adventure
            <p>
              Gujarat is vastly underrated and it's a mystery to us why the
              region isn't more well-known as a tourist destination. It has a
              plethora of temples and palaces.
            </p>
          </figcaption>
          <p className="ah-images-date">
            <span className="category">Travel</span>
            <span> / October 3 2022</span>
          </p>
        </figure>
      </div>
    </main>
  );
};

export default ArticlesHorizontal;
