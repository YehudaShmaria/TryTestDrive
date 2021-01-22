var UrlForProtocole = 'https://data.gov.il/api/3/action/datastore_search?resource_id=c680ada6-9af1-47ab-9acf-d6585df6ad47';
$(document).ready(GetTeacher);
function GetTeacher(){
    var xml = new XMLHttpRequest();
    xml.open("GET", UrlForProtocole, true);
    xml.onreadystatechange = function () {
        if(xml.readyState == 4 && xml.status == 200){
            var Protocols = JSON.parse(this.responseText)
            console.log(Protocols);
            CreateTable(Protocols.result.records)
        }

    }
    xml.send();
}

function CreateTable(Teachres)
{
    var notShow = ['_id','CharacterNumber','LicenseTerms','RankSeniority','MoreDocuments','PreRank','TAB','MedicalStatment','AutomaticGreenRoad','ConfidentialRegistration','EyesTests','CriminalRecord'];
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
            if(!notShow.includes(key)){
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
            if(!notShow.includes(key)){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
            }
          }
        }
    }
}