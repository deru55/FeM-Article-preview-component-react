import drawersImg from "../../assets/images/drawers.jpg";
import avatarImg from "../../assets/images/avatar-michelle.jpg";

const ArticleCard = () => {
  return (
    <article>
      <div className="article-card__image-wrapper">
        <img src={drawersImg} alt="Green dresser with vase and framed pictures" className="article-card__image" />
      </div>

      <div className="article-card__content">
        <div className="article-card__body">
          <h2 className="article-card__title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h2>

          <p className="article-card__description">
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
        </div>

        <div className="article-card__footer">
          <div className="article-card__author" data-author>
            <img src={avatarImg} alt="" className="article-card__avatar" />

            <div>
              <p className="article-card__author-name">Michelle Appleton</p>

              <time className="article-card__date" dateTime="2020-06-28">
                28 Jun 2020
              </time>
            </div>
          </div>

          <button
            type="button"
            className="article-card__share-btn"
            data-share-btn
            aria-label="Share article"
            aria-controls="share-menu"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" className="article-card__share-icon" aria-hidden="true">
              <path
                fill="currentColor"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
