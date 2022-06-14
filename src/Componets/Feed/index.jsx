import React from "react";
import { FeedModal, FeedPhotos } from "../";
import PropTypes from "prop-types";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [infinity, setInfinity] = React.useState(true);
  React.useEffect(() => {
    const infinityScroll = () => {
      if (infinity) {
        let wait = false;
        const scroll = window.scrollY;
        const windowHeight = document.body.offsetHeight - window.innerHeight;
        if (scroll > windowHeight * 0.8 && !wait) {
          setPages((prev) => [...prev, prev.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", infinityScroll);
    window.addEventListener("scroll", infinityScroll);
    return () => {
      window.removeEventListener("wheel", infinityScroll);
      window.removeEventListener("scroll", infinityScroll);
    };
  }, [infinity]);

  return (
    <section>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalPhoto={setModalPhoto}
          setInfinity={setInfinity}
        />
      ))}
    </section>
  );
};

Feed.defaultProps = {
  user: 0,
};

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
};

export default Feed;
