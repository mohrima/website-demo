$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-scrolling");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
