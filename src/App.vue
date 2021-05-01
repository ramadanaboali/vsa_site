<template>
  <div id="app">
    <!-- PreLoader Start -->
    <div class="preloader">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="sk-cube-area">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- PreLoader End -->
    <router-view />
  </div>
</template>

<style></style>
<script>
import $ from "jquery";
export default {
  mounted() {
    $(document).ready(function() {
      // Preloader JS
      $(window).on("load", function() {
        $(".preloader").fadeOut(500);
      });
      // Back To Top Js
      $("body").append(
        '<div id="toTop" class="top-btn"><i class="bx bx-chevrons-up"></i></div>'
      );
      $(window).on("scroll", function() {
        if ($(this).scrollTop() != 0) {
          $("#toTop").fadeIn();
        } else {
          $("#toTop").fadeOut();
        }
      });
      $("#toTop").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
      });
    });
  }
};
</script>
