<%@ page import="packEstructuraPag.*" %>
<%@ page import="packAdministracion.*" %>
<%@ page import="packGestorRecursos.*" %>	
<!DOCTYPE html>	
<html>
		<%//Se imprime la cabecera de la p�gina		
		out.println(Secciones.getSecciones().generarCabecera("Identificacion"));
		%>		
<body>		
		<%
		//Se imprime la barra de men�s
		out.println(Secciones.getSecciones().generarBarraMenu(request.getSession()));
		//Se imprime la barra de t�tulo
		out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
		
		%>
		
<section>
<!--Se escribe la secci�n correspondiente a esta p�gina -->
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
		//Se imprime el pie de p�gina
		out.println(Secciones.getSecciones().generarPie());
		%>		
</body>
</html>