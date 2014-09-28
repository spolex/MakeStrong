<%@page import="packColaboration.GestorColaboracion"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.io.*"%>
<%@ page import="packEstructuraPag.*" %>
<%@ page import="packmodelo.Post" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	//TODO: poner título
	out.println(Secciones.getSecciones().generarCabecera("MYSBlog"));
%>
<body>

<%
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("MYSBlog"));

	
%>
<section>
<%
	//Se crea el título del post.
	//Se carga el post.
	ArrayList<Post> listPosts = GestorColaboracion.getMiColaboracion().getPosts();
	File imgFile = GestorColaboracion.getMiColaboracion().saveImg(listPosts.get(0).getImagen(), 
			getServletContext()
			.getRealPath("")+"/temp", 
			listPosts.get(0).getNombre()+".jpg");
	if(imgFile!=null)
	{
		String path = imgFile.getPath();
		if(listPosts.isEmpty())
		{
			request.getRequestDispatcher("/error/404error.jsp").forward(request, response);
		}
		else
		{
			out.println(Secciones
					.getSecciones()
					.generarPost(listPosts
					.get(listPosts.size()-1).getPost(), listPosts.get(listPosts.size()-1)
					.getTitulo(),path));
		}
	}
%>		
	<section id="comment">
	<form class="form" action="" method="post">
		<h3>Post a comment</h3>
		<p>
			<label for="name">Name</label>
			<input name="name" id="name" type="text" required />
		</p>
		<p>
			<label for="email">E-mail</label>
			<input name="email" id="email" type="email" required />
		</p>
		<p>
			<label for="website">Website</label>
			<input name="website" id="website" type="url" />
		</p>
		<p>
			<label for="comment">Comment</label>
			<textarea name="comment" id="comment" required></textarea>
		</p>
		<p>
			<input type="submit" value="Post comment" />
		</p>
	</form>
	</section>
</section>
<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>