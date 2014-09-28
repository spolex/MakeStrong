<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="packEstructuraPag.*" %>
<%@ page import="packAdministracion.*" %>
<%@ page import="packGestorRecursos.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Recursos"));
%>
<body>

<%
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<section>
<!-- Se escribe la sección correspondiente a esta página -->
	<ul>
		<li>Recursos MRP:
		<ul>
		<%
			out.print(GestorRecursos.getGestorFicheros().listarRecursos());
		%>
			<li><a href="/WEB_OP/general/RecursosRestringidos/monopatin.pdf">Ejercicio producción de patines</a>
			<li><a href="http://www.webandmacros.com/MRPcasopractico1.htm">Fabricaci&oacute;n de tijeras</a>  
		</ul>	
		</li>
	</ul>
	
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>