function mobileFilters() {
  $("#filters-toggle-mobile").on("click", function () {
    if ($(window).width() <= 1024) {
      var n = $(".filters-dialog");
      n.modal("show");
    }
  });
}
function modalHelperClass() {
  $(".modal").on("hidden.bs.modal", function () {
    $(".modal.in").length > 0 && $("body").addClass("modal-open");
  });
}

function setFixedAd() {
  var n = $(".-fixed-on-scroll"),
    t = n.offset();
  if ($(n).is(":visible"))
    $(window).on("scroll", function () {
      var i = $(window).scrollTop();
      i > t.top
        ? n.addClass("fixed").css({ left: t.left })
        : n.removeClass("fixed");
    });
}
function loadScript(n) {
  var t = document.createElement("script");
  t.type = "text/javascript";
  t.src = n;
  document.getElementsByTagName("head")[0].appendChild(t);
}
var loader = new (function () {
  this.isVisible = !1;
  this.show = function () {
    $("body").append("<div class='loader'><div class='spinner'></div></div>");
    this.isVisible = !0;
  };
  this.hide = function () {
    $(".loader").remove();
    this.isVisible = !1;
  };
  this.toggle = function () {
    this.isVisible ? this.hide() : this.show();
  };
})();
window.addEventListener("gi.lifecycle.event.completed", function () {
  mobileFilters();
  modalHelperClass();
  validateForms(),
    (function () {
      isMobile.any
        ? $("body").addClass("mobile")
        : $("body").addClass("not-mobile");
    })();
  $(document).on("click", ".action-login:not([disabled])", function () {
    var n = $(this);
    n.attr("disabled", "disabled");
    giAuth
      .authenticate({ method: "login", fromAction: !1 })
      .finally(function () {
        n.removeAttr("disabled");
      });
  });

  navigator.platform === "MacIntel" &&
    navigator.maxTouchPoints > 1 &&
    !Cookies.get("isIpad13") &&
    Cookies.set("isIpad13", !0, { expires: 365 });
});

$.ajaxSettings.traditional = !0;
