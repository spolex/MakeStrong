<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Acceso denegado"));
%>
<body>

<%
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("MakeYourself Strong"));
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<!-- Se escribe la sección correspondiente a esta página -->
<section>
	<h1>Error</h1>
	<img src="figs/denegado.png" />
	<p> No tiene permiso para acceder al recurso solicitado</p>
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
<% // TODO mapeo error%>
</body>
</html>