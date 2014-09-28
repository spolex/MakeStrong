<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la p�gina
	out.println(Secciones.getSecciones().generarCabecera("Error 404"));
%>
<body>

<%
	//Se imprime la barra de t�tulo
	out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
	//Se imprime la barra de men�s
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<!-- Se escribe la secci�n correspondiente a esta p�gina -->
<section>
	<h1>Ups!, algo va mal...</h1>
	<p> El recurso solicitado no existe</p>
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de p�gina
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>