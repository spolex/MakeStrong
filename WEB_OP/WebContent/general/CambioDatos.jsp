
<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Cambiar mis datos"));
%>
<body>
<%
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<%
	if(request.getAttribute("changed")!=null)out.println(request.getAttribute("changed"));
%>
<section>
<div class="form">
<form method="post" action="/WEB_OP/CambioDatosUsuario">
	Nombre: <input name="nombre" type="text" required><br>
	Correo: <input type="email" name= "correo" required> <br>
	Contrase&ntilde;a&nbsp;actual: <input type="password" name="current"  required><br>
	Nueva&nbsp;contrase&ntilde;a: <input type="password" name= "new"  required><br>
	Repita&nbsp;la&nbsp;contrase&ntilde;a <input type="password" name= "check"  required> <br>
	<input type="submit" value="Cambio de datos">
	<input type="submit" value="Reset">
</form> 
</div>

</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>