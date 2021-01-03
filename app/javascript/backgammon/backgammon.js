document.addEventListener("DOMContentLoaded", () => {
  console.log("backgammon loaded ...");
  setupBoard();
});

tokenTest = () => {
  return (`<span class="token-black"></span>`)
}

tokenBlack = () => {
  return (`<svg><circle cx="60" cy="50" r="23" fill="black" class="token-black" opacity="1" /></svg>`)
}

const tokenWhite = () => {
  return `
    <svg height="100" width="100">
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="lightbrown" />
    </svg>
  `;
};

const setupBoard = () => {
  $("button#setup-board").on("click", () => {
    // $('div#tokens').append(tokenBlack())
    // $('polygon#13.triange-black').html(tokenBlack())
    // $('svg polygon#13').html(`<span class="token-black"></span>`)
    $('svg polygon#13').prepend(tokenTest())
  });
};

class Token {
  constructor(obj) {
    self = obj;
  }
}
