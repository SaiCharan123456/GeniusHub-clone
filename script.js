function toggleAdditionalContent() {
    var additionalContent = document.querySelector('.hidden');
    var button = document.querySelector('.show-more-button');

    if (additionalContent.style.display === 'none') {
      additionalContent.style.display = 'flex';
      button.textContent = 'Show Less';
    } else {
      additionalContent.style.display = 'none';
      button.textContent = 'Show More';
    }
  }