<%@ page import="packEstructuraPag.*" 
   import="java.util.*"
    import="org.apache.commons.fileupload.*"
    import="org.apache.commons.fileupload.servlet.*"
    import="org.apache.commons.fileupload.disk.*"
    import="java.io.*"
    import="packGestorBD.*"%>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	//TODO: poner título
	out.println(Secciones.getSecciones().generarCabecera("Colaboration"));
%>
<body>

<%
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("MYSColaboration"));
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<section>

		<% 
			String idUsuario=request.getSession().getAttribute("user_id").toString(); 
		%>
<!-- Se escribe la sección correspondiente a esta página -->
<form class="form"action="/WEB_OP/ServletPostToServer" method="POST" enctype="multipart/form-data">
	<table>
	<tr>
		<td><label for="titulo">Titulo</label></td>
	</tr>
	<tr>
		<td><input type="text" name="titulo"></td>		
	</tr>
	<tr>
		<td><label for="postComment">Artículo</label></td>
	</tr>
	<tr>
		<td><textarea name="postComment">Escribe aquí tu artículo.</textarea></td>
	</tr>
	<tr>
		<td>
		<table>
			<tr>
			<td>Archivo de imagen para el post</td>
			<td><input type="file" name="postImage" required> </td>
			</tr>
			<tr>
			<td colspan=2><input type=submit value=Subir name=enviar></td>
			</tr>
		</table>
		</td>
	</tr>
	</table>
</form>	
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>