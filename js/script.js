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
    if ($("ul.aside__sub__nav").hasClass("d-none")) {
      $("ul.aside__sub__nav").removeClass("d-none");
      $("ul.aside__sub__nav").addClass("d-block");
    } else {
      $("ul.aside__sub__nav").addClass("d-none");
      $("ul.aside__sub__nav").removeClass("d-block");
    }
  });

  if ($(".dropdown__menu").hasClass("active")) {
    $("ul.aside__sub__nav").removeClass("d-none");
    $("ul.aside__sub__nav").addClass("d-block");
    console.log("hi");
  } else {
    $("ul.aside__sub__nav").addClass("d-none");
    $("ul.aside__sub__nav").removeClass("d-block");
    console.log("hello");
  }
});
