<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Error 404"));
%>
<body>

<%
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<!-- Se escribe la sección correspondiente a esta página -->
<section>
	<h1>Ups!, algo va mal...</h1>
	<p> El recurso solicitado no existe</p>
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>