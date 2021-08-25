	let paginationLeftPos = "20px";
let paginationOpacity = 0;
let checkPaginationClick = 0;

$(".pagination-page-number").click(function() {
  $(".pagination-page-number").removeClass("active");
  $(this).addClass("active");
  paginationLeftPos = $(this).prop("offsetLeft") + "px";
  paginationOpacity = 1;
  checkPaginationClick = 1;

  $(".pagination-hover-overlay").css({
    left: paginationLeftPos,
    backgroundColor: "#54D2D2",
      filter: "opacity(100%)",
    opacity: paginationOpacity
  });
  $(this).css({
    color: "black"
  });
});

$(".pagination-page-number").hover(
  function() {
    paginationOpacity = 1;
    $(".pagination-hover-overlay").css({
      backgroundColor: "#54D2D2",
      filter: "opacity(40%)",
      left: $(this).prop("offsetLeft") + "px",
      opacity: paginationOpacity
    });

    $(".pagination-page-number.active").css({
      color: "#333d45"
    });

    $(this).css({
      color: "#fff"
    });
  },
  function() {
    if (checkPaginationClick) {
      paginationOpacity = 1;
    } else {
      paginationOpacity = 0;
    }

    $(".pagination-hover-overlay").css({
      backgroundColor: "#54D2D2",
      opacity: paginationOpacity,
      left: paginationLeftPos
    });

    $(this).css({
      color: "#fff"
    });

    $(".pagination-page-number.active").css({
      color: "black"
    });
  }
);