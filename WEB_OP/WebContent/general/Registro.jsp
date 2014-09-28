<%@ page import="packEstructuraPag.*" %>
<%@ page import="packAdministracion.*" %>
<%@ page import="packGestorRecursos.*" %>	
<!DOCTYPE html>	
<html>
		<%//Se imprime la cabecera de la página		
		out.println(Secciones.getSecciones().generarCabecera("Identificacion"));
		%>		
<body>		
		<%
		//Se imprime la barra de menús
		out.println(Secciones.getSecciones().generarBarraMenu(request.getSession()));
		//Se imprime la barra de título
		out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
		
		%>
		
<section>
<!--Se escribe la sección correspondiente a esta página -->
<div class="form">
		<form  method="POST" action="/WEB_OP/Registro">
			Nombre: <input type="text" name="nombre" required><br>
			Correo: <input type="email" name="correo" required><br>
			Contrase&ntilde;a: <input type="password" name="contrasena"  required><br>
			Repita&nbsp;contrase&ntilde;a: <input type="password" name="reiterada" required><br>
			<input type="submit" value="Enviar">
			<input type="reset"  value="Reset">
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