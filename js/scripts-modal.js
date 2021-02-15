//popup-sing-in open

$(".header-button").on("click", function (event) {
  event.preventDefault();
  $(".popup-sing-in").fadeIn(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".popup-sing-in").fadeOut(1500);
});
$(".button-sing-in").on("click", function (event) {
  event.preventDefault();
  $(".popup-sing-in").fadeOut(1500);
});
$(".button-sing-in").on("click", function (event) {
  event.preventDefault();
  $(".loading-loading").fadeIn(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".loading-loading").fadeOut(1500);
});

//popup-sing-in close
//popup-get-started open

$(".info-button").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeIn(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeOut(1500);
});

//popup-get-started close
//button-contact open

$(".button-contact").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeIn(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeOut(1500);
});

//button-contact close
//create accaunt open

$(".create-accaunt-a").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeIn(1500);
});
$(".create-accaunt-a").on("click", function (event) {
  event.preventDefault();
  $(".popup-sing-in").fadeOut(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeOut(1500);
});

//create accaunt close
//create-button open

$(".create-account").on("click", function (event) {
  event.preventDefault();
  $(".popup-get-started").fadeOut(1500);
});
$(".create-account").on("click", function (event) {
  event.preventDefault();
  $(".popup-thank").fadeIn(1500);
});
$(".popup-close").on("click", function (event) {
  event.preventDefault();
  $(".popup-thank").fadeOut(1500);
});

//create-button close
