import { useState } from "react";

import drawersImg from "../../assets/images/drawers.jpg";
import avatarImg from "../../assets/images/avatar-michelle.jpg";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "../icons/SocialIcons";
import ShareIcon from "../icons/ShareIcon";

const SOCIAL_LIST = [
  {
    name: "Facebook",
    url: "#",
    image: FacebookIcon,
  },
  {
    name: "Twitter",
    url: "#",
    image: TwitterIcon,
  },
  {
    name: "Pinterest",
    url: "#",
    image: PinterestIcon,
  },
];

const ArticleCard = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);

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
            aria-expanded={isShareOpen}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
