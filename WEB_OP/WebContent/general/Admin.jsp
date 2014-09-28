<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
      import="java.util.*"
    import="org.apache.commons.fileupload.*"
    import="org.apache.commons.fileupload.servlet.*"
    import="org.apache.commons.fileupload.disk.*"
    import="java.io.*"
    import="packGestorBD.*"%>
    
<%@ page import="packEstructuraPag.*,packAdministracion.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Administración"));
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


		<h1>Usuarios del sistema</h1><br>
		<form action="/WEB_OP/EliminarUsuario" method="POST"><ul>
		<% out.println(GestorAdministracion.getGestorAdministracion().listarUsuarios()); %>
		</ul>
		<input type="submit" value="Eliminar">
		</form>
		
		<h1>Recursos disponibles</h1>
		<form action="/WEB_OP/EliminarRecurso" method="POST">
		<ul>
		<% 
		String idUsuario=request.getSession().getAttribute("user_id").toString(); 
		%>
		</ul>
		<input type="submit" value="Eliminar">
		
		</form>		
		<h1>Añadir recursos</h1>		
		<form action=Admin.jsp method=post enctype=multipart/form-data>
		<table>
			<tr>
			<td>Fichero</td>
			<td><input type=file name=fichero></td>
			</tr>
			<tr>
			<td colspan=2><input type=submit value=Subir name=enviar></td>
			</tr>
		</table>
		</form>
	
	
	
		
		<%
		//Ruta donde se guardara el fichero
		//File destino=new File("/usuarios/"+idUsuario+"/4/");
		String id = session.getAttribute("user_id").toString();
		File destino=new File(getServletContext().getRealPath("")+"/usuarios/"+id+"/4");
		//TODO poner el path bien
		
		// Convertimos el HTTPRequest en un ContextRequest,
		// este paso es necesario en la ultima version,
		// ya que los metodos de las versiones anteriores
		// se han quedado desfasados.
		ServletRequestContext src=new ServletRequestContext(request);
		
		//Si el formulario es enviado con Multipart
		if(ServletFileUpload.isMultipartContent(src)){
		//Necesario para evitar errores de NullPointerException
		DiskFileItemFactory factory = new DiskFileItemFactory((1024*1024),destino);
		//Creamos un FileUpload
		ServletFileUpload upload=new  ServletFileUpload(factory);
		//Procesamos el request para que nos devuelva una lista
		//con los parametros y ficheros.
		List lista = upload.parseRequest(src);
		File file= null;
		//Recorremos la lista.
		Iterator it = lista.iterator();
		while(it.hasNext()){
			//Rescatamos el fileItem
			FileItem item=(FileItem)it.next();
			//Comprobamos si es un campo de formulario
			if(item.isFormField())
				//Hacemos lo que queramos con el.
				out.println(item.getFieldName()+"<br>");
			else
			{
				//Si no, es un fichero y lo subimos al servidor.
				//Primero creamos un objeto file a partir del nombre del fichero.
				file=new File(item.getName());
				//Lo escribimos en el disco
				// usando la ruta donde se guardara el fichero
				// y cogiendo el nombre del file
				// Nota: Se podria hacer usando el objeto item en vez del file directamente
				// Pero esto puede causar incompatibilidades segun que navegador, ya que 
				// algunos solo pasan el nombre del fichero subido, pero otros
				// como Iexplorer, pasan la ruta absoluta, y esto crea un pequeño problema al escribir
				// el fichero en el servidor.
				out.println(destino);
				item.write(new File(destino,file.getName()));
				String path="/WEB_OP/usuarios/"+idUsuario+"/4/"+file.getName();
			
				String sentencia="INSERT INTO archivo VALUES ('"+ file.getName()+ "', '"+ path+"', '4', '"+ idUsuario +"')";
				
				SGBD.getSGBD().execSQL(sentencia);
				out.println("Fichero subido");
				
			}
		}
	}
	


%>
		
	
		
		
		
	
</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>