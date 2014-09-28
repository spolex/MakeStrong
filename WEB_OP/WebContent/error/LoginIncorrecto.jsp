<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Login incorrecto"));
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
	<h1>Login incorrecto</h1>
	<img src="figs/nologin.png" />
	<p>Intentelo de nuevo o <a href="general/Registro.jsp">registrese</a></p>
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