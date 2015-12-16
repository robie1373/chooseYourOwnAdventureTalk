define(function() {
  return function postResult(dClass, dId, fun) {
    $(document).ready(function() {
      $("body").append("<div class='" + dClass + "' id='" + dId + "'></div>");
      $("#" + dId).append("<p class='" + dClass + "'>" + fun + "</p>");
    })
  }
});