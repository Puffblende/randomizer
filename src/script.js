$(function () {

  // Collect dom nodes
  var $list       = $('#list');
  var $inputField = $('#input');
  var $randomItem = $('#random-item');
  var $actions    = $('#actions');

  // Get a random integer (0 - max)
  getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Create entry and yield it to the list
  var saveEntry = function () {
    var value = $inputField.val();
    if(!value.length) return;
    $list.append($('<li/>').text(value));
    $inputField.val('').focus();
    $actions.show();
    window.scrollTo(0, 100000) // Hacky scroll to bottom of document;
  }

  // Grab random list item and display its text
  var randomize = function () {
    var len = $list.children().length;
    var rand = getRandomInt(len);
    var li = $list.children().get(rand);
    $randomItem.text($(li).text());
  }

  // Clear tze list
  var clearList = function () {
    $list.empty();
    $inputField.val('').focus();
    $randomItem.text('');
    $actions.hide();
  }

  // Assign actions to buttons
  $('#btn-save').on('click', saveEntry);
  $('#btn-clear-list').on('click', clearList);
  $('#btn-generate').on('click', randomize);

  //Assign key events
  $inputField.on('keyup', function (event) {
    if(event.which == 13) { // ENTER
      saveEntry();
    }
  });

});
