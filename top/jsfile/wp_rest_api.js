(function ($) {
$(document).ready(function () {

  function getWPFunction(pUrl, pElement) {
    var url = pUrl;

    $.ajax({
     type: "GET",           // Använd Get
     url: url,
     timeout: 5000,         //Sätter timeout för hur lång den vill ladda
     beforeSend: function () {
       console.log('log beforesend'); // sätta console för att kunna ser på Chrome ifall nånting gick fel
     },
     complete: function () {
       console.log('log complete');
     },
     success: function (wpData) { // lägga in Parameter from WP
       console.log('log success');
      Javahight(wpData); // skickar wpData till Javahight FN
     },
     error: function (err) { // ifall det är error log
       console.log('någon gick fel testa prova igen senare', err);
     }
   }); // end of $.ajax


    function Javahight(pData) {
      //console.log('det är från från pData', pData); // log wpData
      var wpTitle = pData.title.rendered; // loop all alla från title
      //console.log(wpTitle);
      //console.log(' pData.length ', pData.length);
      var wpTitle = pData.title.rendered; // loop all rendered in title
      var wpContent = pData.content.rendered; // loop content from wp
      // console.log('CHK title and content', wpTitle, wpContent); // it works
      if (pData._embedded['wp:featuredmedia']) {
        var wpFM = pData._embedded['wp:featuredmedia'];
        //  console.log('This is wpFM', wpFM);

        for (var i = 0; i < wpFM.length; i++) {
          var wpImage = wpFM[i].media_details.sizes.medium_large.source_url;
          var wpCaption = wpFM[i].caption.rendered;
          var wpFeaturedMediaTitle = wpFM[i].title.rendered;

          var wpHTML = ''; // Add content här sen

          wpHTML += '<section>'; // för att öppnar tag ladda section in html
          wpHTML += '<h1>' + wpTitle + '</h1>' // för att title ska vara h1
          wpHTML += '<figure>'; // öpnnar tag och adda in figure
          wpHTML += '<img class="image" src="' + wpImage + '">'; // ladda img
          wpHTML += '<figcaption>' + '<h2>' + wpFeaturedMediaTitle + '</h2>' + wpCaption + '</figcaption>';
          wpHTML += '</figure>'; // adda closing tag
          wpHTML += wpContent; // adda content
          wpHTML += '</section>';//section close


          pElement.append(wpHTML);



        } // if _embedded

      } //loop pData

    } //Javahight

  } //getWPFun

  var $url_1 = "http://localhost/hemtenta/wp-json/wp/v2/posts/13?_embed=true"; //hämtar länk för section från wp med hjälv av POSTMAN
  var $section_1 = $('#post1'); //väjl ett section namn
  getWPFunction($url_1, $section_1); //väjl ett section namn

  var $url_2 = "http://localhost/hemtenta/wp-json/wp/v2/posts/11?_embed=true";  //hämtar länk för section från wp med hjälv av POSTMAN
  var $section_2 = $('#post2'); //väjl ett section namn
  getWPFunction($url_2, $section_2);  //väjl ett section namn

  var $url_3 = "http://localhost/hemtenta/wp-json/wp/v2/posts/6?_embed=true"; //hämtar länk för section från wp med hjälv av POSTMAN
  var $section_3 = $('#post3'); //väjl ett section namn
  getWPFunction($url_3, $section_3);  //väjl ett section namn

}); //.ready
})(jQuery)
