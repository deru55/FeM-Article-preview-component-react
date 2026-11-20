import { useState } from "react";

import drawersImg from "../../assets/images/drawers.jpg";
import avatarImg from "../../assets/images/avatar-michelle.jpg";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "../icons/SocialIcons";
import ShareIcon from "../icons/ShareIcon";

import "./ArticleCard.css";

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

  const handleToggleShare = () => {
    setIsShareOpen((prev) => !prev);
  };

  return (
    <article className="article-card">
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

          <div className="article-card__share-menu" data-share-menu>
            <span className="article-card__share-label">SHARE</span>

            <ul className="social-list">
              {SOCIAL_LIST.map((item) => {
                const Icon = item.image;

                return (
                  <li className="social-list__item" key={`${item.name}-link`}>
                    <a href={item.url} className="social-list__link" aria-label={`Share on ${item.name}`}>
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            type="button"
            className="article-card__share-btn"
            data-share-btn
            aria-label="Share article"
            aria-controls="share-menu"
            aria-expanded={isShareOpen}
            onClick={handleToggleShare}
          >
            <ShareIcon />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
