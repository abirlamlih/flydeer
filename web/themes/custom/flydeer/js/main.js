/**
 * @file
 * Provides responsive behaviors to HTML details elements.
 */

(function($) {
  // Custom AJAX commands
  if(typeof Drupal.ajax != "undefined") { // Ensure follwing code will not generate errors in administration pages
      Drupal.ajax.prototype.commands.reloadPage = function(ajax, rsp, status) {
          location.reload();
      };
  }
})(jQuery,Drupal);
