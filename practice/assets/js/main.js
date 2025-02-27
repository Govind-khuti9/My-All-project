$('#prime').click(function() {
  toggleFab();
});

function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
}

function hideChat(hide) {
    switch (hide) {
      case 1:
            $('#chat_converse').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
    }
}

