var Url = "https://data.gov.il/dataset/3fc54b81-25b3-4ac7-87db-248c3e1602de/resource/72bd51be-512b-4430-b2d2-f3295c90e569/download/72bd51be-512b-4430-b2d2-f3295c90e569.xml";
$("document").ready(function () {
    $("#Gamp").fadeIn(3000);
});

function yehuda1(){
    $('#Insert').css('display',('none'))
    $('#searching').fadeIn(3000)
    var xml = new XMLHttpRequest();
    xml.open("GET", Url, true);
    xml.onreadystatechange = function () {
    var alladta = xml.responseText;
    var parser = new DOMParser();
    var xmldoc = parser.parseFromString(alladta,"text/xml")
    var x =  xmldoc.getElementsByTagName("שם_ישוב");
    for(i=0;i<x.length;i++)
    {
      $('.Loction').append($("<option></option>")
                 .attr("value", i.key)
                 .text(x[i].textContent));
     }
    };
    xml.send();
}

function yehuda(){
    $('#searching').css('display',('none'))
    $('#Insert').fadeIn(3000)
    var xml = new XMLHttpRequest();
    xml.open("GET", Url, true);
    xml.onreadystatechange = function () {
    var alladta = xml.responseText;
    var parser = new DOMParser();
    var xmldoc = parser.parseFromString(alladta,"text/xml")
    var x =  xmldoc.getElementsByTagName("שם_ישוב");
    for(i=0;i<x.length;i++)
    {
      $('.Loction').append($("<option></option>")
                 .attr("value", i.key)
                 .text(x[i].textContent));
     }
    };
    xml.send();
}
