var UrlForCity = "https://data.gov.il/dataset/3fc54b81-25b3-4ac7-87db-248c3e1602de/resource/72bd51be-512b-4430-b2d2-f3295c90e569/download/72bd51be-512b-4430-b2d2-f3295c90e569.xml";
$("document").ready(function () {
    $("#Gamp").fadeIn(3000);
});

function GetTeacher(){
    $('#Insert').css('display',('none'))
    $('#searching').fadeIn(3000)
    var xml = new XMLHttpRequest();
    xml.open("GET", UrlForCity, true);
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

function InsertTeacher(){
    $('#searching').css('display',('none'))
    $('#Insert').fadeIn(3000)
    var xml = new XMLHttpRequest();
    xml.open("GET", UrlForCity, true);
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


function GetAllObj(){
    var Location = document.getElementById('Location').value;
    var Name = document.getElementById('Name').value;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://serversidetestdrive.herokuapp.com";
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
           var AllTeachers = JSON.parse(this.responseText)
        //    console.log(AllTeachers);
            SortTheTeachers(AllTeachers)
            console.log(AllTeachers)
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    function SortTheTeachers(Teachers)
    {
        var result;
        if(Name == '') 
        {
            result = Teachers.filter(t => t.Location == Location);
        }
        else{
            result = Teachers.filter(t => t.Location == Location && t.Name == Name);
            console.log(result)
            if(result.length == 0)
            {
                result = Teachers.filter(t => t.Location == Location);
            }
        }
        console.log(result);
        CreateTable(result);
    }
}
function CreateTable(Teachres)
{
    let table = document.querySelector("table");
    table.innerHTML = '';
    console.log(Teachres)
    let data = Object.keys(Teachres[0]);
    generateTableHead(table, data);
    generateTable(table, Teachres);
    function generateTableHead(table, data){
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
            if(key!='_id'){
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
            }
        }
      }
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (key in element) {
            if(key!='_id'){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            }
          }
        }
    }
}
