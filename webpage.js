'use strict';

document.getElementById("hamburger").onclick = () => {
  let nav = document.getElementById("header-nav");
  if (nav.classList.contains("expanded")) {
    nav.classList.remove("expanded");
  } else {
    nav.classList.add("expanded");
  }
};

document.getElementById("Committees").onmouseenter = () => {
  let committees = document.getElementById("Committees");  
  committees.classList.add("committees_submenu");  
};

document.getElementById("Committees").onmouseleave = () => {
  let committees = document.getElementById("Committees");  
  committees.classList.remove("committees_submenu");  
};

const e = React.createElement;









class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });
