$('#passbtn').on('click', function() {
  var passwordInput = $('#password');
  passwordInput.attr('type', passwordInput.attr('type') === 'password' ? 'text' : 'password');
});

$('#checkBox').on('click', function() {
  $('#submitButton').prop('disabled', !$(this).prop('checked'));
});

$('#scrolltop').on('click', function() {
  $('html, body').animate({ scrollTop: 0 }, 500);
});

$('#BcgndBtn').on('click', function() {
  $('body').css('background-image', 'url("data:image/png;base64,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")');
});

$('#textarea').on('input', function() {
  var maxLength = $(this).attr('maxlength');
  var currentLength = $(this).val().length;
  var remaining = maxLength - currentLength;
  $('#charCount').text(remaining);
});

var faded = false;

$('#fadeParagraph').on('click', function() {
  if (faded) {
    $(this).animate({ opacity: 1 }, 1000);
  } else {
    $(this).animate({ opacity: 0 }, 1000);
  }
  faded = !faded;
});

$('#animateBtn').on('click', function() {
  $('#box').animate({ height: '200px', width: '200px' }, 1000);
});

$('#resetBtn').on('click', function() {
  $('#box').animate({ height: '100px', width: '100px' }, 1000);
});
