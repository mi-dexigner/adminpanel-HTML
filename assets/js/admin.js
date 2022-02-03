 $(document).ready(function () {
    $(".sidebar-menu-dropdown:not(.submenu-active)").hover(function () {
      $(this).toggleClass("submenu-hover");
    });
  });