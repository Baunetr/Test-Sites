

function toggleFilter() {
  var y = event.currentTarget;
    var x = y.getAttributeNode('selected').specified;

    if (x) {
      $('#filter-table').addClass('d-none');
      $('#filter-icon').addClass('icon-filter');
      $('#filter-icon').removeClass('icon-filter-selected');
      $("filter-icon").attributes.removeNamedItem('selected');

    } else {

      $('#filter-table').removeClass('d-none');
      $('#filter-icon').addClass('icon-filter-selected');
      $('#filter-icon').removeClass('icon-filter');
      $("filter-icon")[0].attributes.removeNamedItem('selected');
    }

}
