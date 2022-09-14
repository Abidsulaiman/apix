$(function () {
  $('input[name="daterange"]').daterangepicker(
    {
      opens: "left",
    },
    function (start, end, label) {
      console.log(
        "A new date selection was made: " +
          start.format("YYYY-MM-DD") +
          " to " +
          end.format("YYYY-MM-DD")
      );
    }
  );

  $(".dropdown__menu").click(() => {
    $("ul.aside__sub__nav").toggleClass("d-none");
  });

  if ($(".dropdown__menu .cat__side__nav").hasClass("active")) {
    $("ul.aside__sub__nav").removeClass("d-none");
  } else {
    $("ul.aside__sub__nav").addClass("d-none");
  }

  $("#navbar-toggler").click(() => {
    $("body").toggleClass("sidebar-text");
    $("body").toggleClass("sidebar-icon-only");
  });

  $("#sidebarCollapseBtn").click(() => {
    $(".sidebar").toggleClass("collapsed");
    $("body").toggleClass("sidebar-text");
  });

  if (window.innerWidth < 991) {
    $("body").removeClass("sidebar-text");
    $("body").removeClass("sidebar-icon-only");
  }

  $(".dropdown-item").click((e) => {
    console.log(e);
  });
});
