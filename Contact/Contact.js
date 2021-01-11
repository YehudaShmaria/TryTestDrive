var Name = document.getElementById('Name');
var body = document.getElementById('body')
function sendEmail() { 
	Email.send({ 
	  Host: "smtp.gmail.com", 
	  Username: "yehudas1999@gmail.com", 
	  Password: "207193780", 
	  To: 'yehudas1999@gmail.com', 
	  From: "yehudas1999@gmail.com", 
	  Subject: `${Name} is Send A mail`, 
	  Body: `${body}`, 
	}) 
	  .then(function (message) { 
	  alert("mail sent successfully") 
	  }); 
	} 
