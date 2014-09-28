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
	//Se imprime la cabecera de la p�gina
	//TODO: poner t�tulo
	out.println(Secciones.getSecciones().generarCabecera("Colaboration"));
%>
<body>

<%
	//Se imprime la barra de t�tulo
	out.println(Secciones.getSecciones().generarTitulo("MYSColaboration"));
	//Se imprime la barra de men�s
	out.println(Secciones.getSecciones().generarBarraMenu(session));
%>

<section>

		<% 
			String idUsuario=request.getSession().getAttribute("user_id").toString(); 
		%>
<!-- Se escribe la secci�n correspondiente a esta p�gina -->
<form class="form"action="/WEB_OP/ServletPostToServer" method="POST" enctype="multipart/form-data">
	<table>
	<tr>
		<td><label for="titulo">Titulo</label></td>
	</tr>
	<tr>
		<td><input type="text" name="titulo"></td>		
	</tr>
	<tr>
		<td><label for="postComment">Art�culo</label></td>
	</tr>
	<tr>
		<td><textarea name="postComment">Escribe aqu� tu art�culo.</textarea></td>
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
	//Se imprime el pie de p�gina
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>