<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Show</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
</head>
<body>

	<h1 class="modal-title, text-center" id="modalFullscreenSizeLabel">Here's your
		Omikuji!</h1>
<div style="background:#ADD8E6;, width:1000px;" class="container">

	<h1>In ${storedNumber} years you will live in ${storedCity} with
		${storedPerson} as your room mate, ${storedHobby} for a living. The
		next time you see a ${storedLiving}, you will have good luck. Also,
		${storedNice}.</h1>
</div>
	<a href="/" class="btn btn-primary">Go Back</a>

</body>
</html>