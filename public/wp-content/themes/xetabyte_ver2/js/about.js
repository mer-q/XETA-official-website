jQuery(document).ready(function ($) {
  $(".address_slider_navi ._item, #map_point .points").click(function () {
    let index = $(this).index();

    $(".address_slider_navi ._item").removeClass("active");
    $(".address_slider_navi ._item").eq(index).addClass("active");

    $(".address_slider_box_item").removeClass("active");
    $(".address_slider_box_item").eq(index).addClass("active");

    $("#map_point .points").removeClass("active");
    $("#map_point .points").eq(index).addClass("active");
  });

  $(".top-navi ul li a").click(function () {
    let scrollTo = $(this).attr("scrollTo");

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#" + scrollTo).offset().top + 36,
      },
      1000
    );
  });
});
