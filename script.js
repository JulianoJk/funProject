function changeGifSource(source) {
  document.getElementById("gifDisplay").src = source;
}

function setupButtonHoverEvents(buttonId, gifSource) {
  const button = document.getElementById(buttonId);
  button.addEventListener("mouseenter", function () {
    changeGifSource(gifSource);
  });
  button.addEventListener("mouseleave", function () {
    changeGifSource("./images/willyou.gif");
  });
}

function setupInitialButtons() {
  const buttonContainer = document.getElementById("buttonContainer");

  const buttons = [
    { id: 'yesButton', class: 'btn btn-success', text: 'Yes', gif: './images/yes.gif' },
    { id: 'noButton', class: 'btn btn-danger', text: 'No', gif: './images/no.gif' },
    { id: 'maybeButton', class: 'btn btn-warning', text: 'Maybe', gif: './images/maybe.gif' }
  ];

  buttonContainer.innerHTML = '';

  buttons.forEach(({ id, class: className, text, gif }) => {
    const button = document.createElement("button");
    button.id = id;
    button.className = className;
    button.textContent = text;
    buttonContainer.appendChild(button);

    setupButtonHoverEvents(id, gif);
    button.addEventListener("click", function () {
      if (id === 'yesButton') {
        window.location.href = 'accepted.html';
      } else if (id === 'maybeButton') {
        window.location.href = 'maybe.html';
      } else {
        replaceButtons();
      }
    });
  });
}

function replaceButtons(clickedText = '') {
  const buttonContainer = document.getElementById("buttonContainer");
  buttonContainer.innerHTML = '';

  const newButton = {
    id: 'tryAgainButton',
    class: 'btn btn-info',
    text: 'Try again',
    gif: './images/dean.gif'
  };

  const button = document.createElement("button");
  button.id = newButton.id;
  button.className = newButton.class;
  button.textContent = newButton.text;
  buttonContainer.appendChild(button);

  const textAboveButton = document.createElement("p");
  textAboveButton.textContent = `Oh you wont'! Try again.`;
  buttonContainer.insertBefore(textAboveButton, button);

  button.addEventListener("click", function () {
    window.location.href = "willyou.html";
  });
}

setupInitialButtons();
