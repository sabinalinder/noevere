import $ from 'jquery';

/**
 * Toggle the primary menu by clicking the toggle button
 */
export function toggleMenuButton() {
    var primaryMenu = $('#primary-menu');
    if (primaryMenu.hasClass('open')) {
        primaryMenu.removeClass('open');
        primaryMenu.hide();
    } else {
        primaryMenu.addClass('open');
        primaryMenu.show();
    }
}