

function changeSelected(receiptUploader) {
  var receiptUploaderVisable = (receiptUploader);

    if (receiptUploaderVisable) {
      $('#receiptUploader').removeClass('d-none');
      $('#carouselExampleControls').addClass('d-none');

    } else {
      $('#receiptUploader').addClass('d-none');
      $('#carouselExampleControls').removeClass('d-none');
    }
  $('#block-selectable a.border').removeClass("selected");
  $(event.currentTarget).addClass("selected");
}
