<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la p�gina
	out.println(Secciones.getSecciones().generarCabecera("Acceso denegado"));
%>
<body>

<%
	//Se imprime la barra de t�tulo
	out.println(Secciones.getSecciones().generarTitulo("MakeYourself Strong"));
	//Se imprime la barra de men�s
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<!-- Se escribe la secci�n correspondiente a esta p�gina -->
<section>
	<h1>Error</h1>
	<img src="figs/denegado.png" />
	<p> No tiene permiso para acceder al recurso solicitado</p>
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de p�gina
	out.println(Secciones.getSecciones().generarPie());
%>
<% // TODO mapeo error%>
</body>
</html>