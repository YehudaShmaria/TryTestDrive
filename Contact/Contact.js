function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "yehudas1999@gmail.com",
	Password : "207193780",
	To : 'yehudas1999@gmail.com',
	From : "yehudas1999@gmail.com",
	Subject : "Hello World",
	Body : "כמה טוב לי שאני יהודי",
	}).then(
		message => alert("mail sent successfully")
	);
}