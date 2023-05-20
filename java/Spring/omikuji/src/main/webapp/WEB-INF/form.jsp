<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Form</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>
	<h1>Send an Omikuji!</h1>
	<form action ="/form" method = "post">
		<div>
			<label>Pick any number from 5 to 25</label>
			<input type ="text" name="number"/>
		</div>
		<div>
			<label>Enter the name of any city.</label>
			<input type="text" name="city"/>
		</div>
		<div>
			<label>Enter the name of any real person.</label>
			<input type="text" name="person"/>
		</div>
		<div>
			<label>Enter professional endeavor or hobby.</label>
			<input type="text" name="hobby"/>
		</div>
		<div>
			<label>Enter any type of living thing.</label>
			<input type="text" name="living"/>
		</div>
		<div>
			<label>Say something nice to someone</label>
			<input type="text" name="nice"/>
		</div>
		<div>
			<h3>Send and shows a friend</h3>
			<input type="submit"/>
		</div>
		
	</form>
</body>
</html>