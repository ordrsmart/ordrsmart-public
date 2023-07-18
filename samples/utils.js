// preventButtonClick prevents a given button from being clicked
// and displays the given warning
// if any of the entries in a given list of values is undefined
function preventButtonClick(buttonID, values, warningID) {
  $(warningID).hide();
  
  $(buttonID).on('click', function(e) {
    if (buttonID == '#submitButton') {
      console.log('entered');
      console.log('values', values);
      console.log('warning ID', warningID);
    }
    let prevent = false;
    values.forEach(v => {
      if (!v) {
        prevent = true;
      }
    });
    
    if (prevent) {
      $(warningID).show();
      e.stopPropagation();
    }
  });
}

// toTitleCase converts a string to Title Case
function toTitleCase(str) {
 	return str.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
