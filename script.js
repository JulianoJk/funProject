// Function to change the GIF source
function changeGifSource(source) {
    document.getElementById("gifDisplay").src = source;
  }
  
  // Hover event handlers for any button
  function setupButtonHoverEvents(buttonId, gifSource) {
    const button = document.getElementById(buttonId);
    button.addEventListener("mouseenter", function () {
      changeGifSource(gifSource);
    });
    button.addEventListener("mouseleave", function () {
      changeGifSource("/images/willyou.gif");
    });
  }
  
  // Function to setup initial buttons and their events
  function setupInitialButtons() {
    const buttonContainer = document.getElementById("buttonContainer");
  
    // Define initial buttons with their IDs, classes, text, and hover GIFs
    const buttons = [
      { id: 'yesButton', class: 'btn btn-success', text: 'Yes', gif: './images/yes.gif' },
      { id: 'noButton', class: 'btn btn-danger', text: 'No', gif: './images/no.gif' },
      { id: 'maybeButton', class: 'btn btn-warning', text: 'Maybe', gif: './images/maybe.gif' }
    ];
  
    // Clear existing buttons
    buttonContainer.innerHTML = '';
  
    // Create and append initial buttons
    buttons.forEach(({ id, class: className, text, gif }) => {
      const button = document.createElement("button");
      button.id = id;
      button.className = className;
      button.textContent = text;
      buttonContainer.appendChild(button);
  
      // Setup hover and click events
      setupButtonHoverEvents(id, gif);
      button.addEventListener("click", replaceButtons);
    });
  }
  
  // Click event handler to replace buttons
  function replaceButtons() {
    const buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.innerHTML = ''; // Clear existing buttons
  
    // New buttons setup
    const newButtons = [
      { id: 'youWillButton', class: 'btn btn-primary', text: 'You will?!', gif: './images/youwill.gif' }, // Ensure you have a GIF for this
      { id: 'noReallyButton', class: 'btn btn-secondary', text: 'NO???', gif: './images/noreally.gif' } // Ensure you have a GIF for this
    ];
  
    // Create, append, and setup hover events for new buttons
    newButtons.forEach(({ id, class: className, text, gif }) => {
      const button = document.createElement("button");
      button.id = id;
      button.className = className;
      button.textContent = text;
      buttonContainer.appendChild(button);
  
      setupButtonHoverEvents(id, gif);
    });
  }
  
  // Initialize the page with initial buttons and their functionalities
  setupInitialButtons();
  