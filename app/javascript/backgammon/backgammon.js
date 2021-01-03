document.addEventListener("DOMContentLoaded", () => {
  console.log("backgammon loaded ...");
  setupBoard();
});

tokenBlack = () => {
  return (`
    <svg xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="100" r="23" fill="black" opacity="1"/>
    </svg>
  `);
};

const tokenWhite = () => {
  return `
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightbrownd" />
    </svg>
  `;
};

const setupBoard = () => {
  $("button#setup-board").on("click", () => {
    $('div#tokens').append(tokenBlack())
  });
};

class Token {
  constructor(obj) {
    self = obj;
  }
}
