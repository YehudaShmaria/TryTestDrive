
function sendEmail() { 
	{
		var Name = document.getElementById('Name').value;
		var Mail = document.getElementById('Gmail').value;
		var Body = document.getElementById('body').value;
		const obj = {
			Name:Name,
			Mail:Mail,
			Body:Body
   
		}
		const json = JSON.stringify(obj);
		const xml = new XMLHttpRequest();
		xml.open('POST','https://serversidetestdrive.herokuapp.com/sendMail')
		xml.setRequestHeader("Content-type","application/json")
		xml.send(json);
		alert('התגובה נשלחה בהצליה!!!')
	   } 
} 
