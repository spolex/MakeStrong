package packEstructuraPag;



import javax.servlet.http.HttpSession;

/**
 * MAE que contiene métodos que devuelven el código HTML correspondiente a las secciones correspondientes
 * a la barra de título, navegación, lateral y pie de página
 *
 */
public class Secciones {
	
	private static Secciones mSecciones = new Secciones();
	
	private Secciones(){}
	
	public static Secciones getSecciones()
	{
		return mSecciones;
	}
	
	/**
	 * Genera la sección "head" de las páginas en base al título
	 * proporcionado por parámetro. En ella se enlaza el fichero de estilo.
	 * @param titPagina
	 * @return
	 */
	public String generarCabecera(String titPagina)
	{
		return "<head>"
				+ "<meta charset=\"ISO-8859-1\">"
				+ "<title>"+ titPagina +"</title>"
				+ "<link href=\"/WEB_OP/style/estilo.css\" rel=\"stylesheet\" />"
				+ "</head>";
	}
	
	public String generarTitulo(String title)
	{
		return "<header class=\"generalheader\">"
				+"<br></br>"
				+ "<h1>"+title+"</h1>"
				+ "</header>";
	}
	
	/**
	 * Genera la barra de navegación en base a la información guardada en la sesión del usuario
	 * Si no se ha identificado, mostramos el formulario de identificación
	 * En caso contrario, damos acceso a páginas de perfil y modificación de datos
	 * @param sesion
	 * La sesión del usuario
	 * @return
	 * El String correspondiente a la cabecera
	 */
	public String generarBarraMenu(HttpSession sesion)
	{
		String html = "<nav> \n"
				+ "<a href=\"/WEB_OP/general/Inicio.jsp\">Inicio</a> \n"
				+ "<a href=\"\">Entrenamientos</a> \n"
				+ "<a href=\"/WEB_OP/general/MYSBlog.jsp\">Noticias</a> \n";
		

		//Si no hay ningún usuario identificado en la sesión,
		// mostramos el formulario y el acceso a la página de registro
		if(sesion.getAttribute("user_id") == null)
		{
			html = html + "<a href=\"/WEB_OP/general/Registro.jsp\">Registrarse</a>"
					+ "<form name=\"identificacion\" action=\"/WEB_OP/Identificacion\" method=\"POST\">"
					+ "<input type=\"text\" name=\"nombre\" id=\"nombre\" placeholder=\"Nombre\" required/>"
					+ "<input type=\"password\" name=\"contrasena\" id=\"contrasena\" placeholder=\"contrase&ntilde;a\" required/>"
					+ "<input type=\"submit\" value=\"Enviar\">"
					+ "</form>";

		}
		else
		{
			//Mostramos los accesos a las páginas de gestión de los usuarios
			html = html + "<a href=\"/WEB_OP/InicioUsuario\">" + sesion.getAttribute("user_name").toString() + "</a>"
					+ "<a href=\"/WEB_OP/general/CambioDatos.jsp\">Cambiar datos</a>"
					+ "<a href=\"/WEB_OP/DesLogin\">Desconexi&oacute;n</a>";
			
			//Si el usuario actual es un administrador añadimos la sección de administración.
			if(sesion.getAttribute("admin")!=null)
			{
				html += "<a href=\"/WEB_OP/general/Admin.jsp\">Administración</a>";
			}
			//Si el usuario es un colaborador se añade la sección
			if(sesion.getAttribute("colaborador")!=null)
			{
				html += "<a href=\"/WEB_OP/general/Colaboracion.jsp\">Art&iacuteculo nuevo</a>";
			}
		}
		

		
		//cerramos la sección
		html = html + "</nav>";
				
		return html;
	}
	
	public String generarLateral()
	{//TODO Completar
		return "<aside>"
				+ "<h3>Enlaces de interes: </h3>"
				+ "<a href=\"\">Nutrición deportiva</a><br>"
				+ "<a href=\"\">Suplementos</a>"
				+ "</aside>";
	}
	
	public String generarPie()
	{
		return "<footer>"
				+ "<h3>Esta p&aacute;gina ha sido realizada por:</h3>"				 
				+ "<a href=\"/WEB_OP/web_personal/JI_Sanchez.jsp\">Spolex Develop Studio</a>"				
				+ "</footer>";
	}
	
	/**
	 * Genra una seccion de error en HTML
	 * @param texto
	 * El texto a incluir en la sección
	 * @return
	 */
	public String generarError(String texto)
	{
		String rdo = "<div class=\"error\">"
				+ "<h5>Error</h5>"
				+ texto
				+"</div>";
		return rdo;
	}
	
	/**
	 * 
	 * @param subtitulo
	 * @return
	 */
	public String generarSubtitulo(String subtitulo)
	{
		return "<header class=\"subtitleheader\">"
				+ "<h2>"+subtitulo+"</h2>"
				+ "</header>";
	}
	
	public String generarPost(String post, String titulo, String img)
	{
		return "<section> "
				+ "<article class=”blogPost”> "
				+ "<header> "
				+ "<h2>"+titulo+"</h2>"
				+"<input type=\"image\" src=\""+img+"\">"
				+ "</header>"
				+ "<p>"
				+ post+"</p></article> </section>";
	}

}
