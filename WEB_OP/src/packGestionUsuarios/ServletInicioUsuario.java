package packGestionUsuarios;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import packEstructuraPag.Secciones;

/**
 * Servlet implementation class ServletInicioUsuario
 */
public class ServletInicioUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletInicioUsuario() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//TODO eliminar fichero seleccionado
		//String path = request.getParameter("archivos");
		
		this.processRequest(request, response);
	}

	
	private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException
	{
		
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		//String idUsuario=request.getSession().getAttribute("user_id").toString();
		
		
		
		// DOC HTML5
		

		out.println("<html>");
				 
		//Web header
		out.println(Secciones.getSecciones().generarCabecera("Inicio de usuario"));
					
		out.println("<body>");

		if(request.getAttribute("changed")!=null)out.println(request.getAttribute("changed"));
		//title bar
		out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
		//menu bar
		out.println(Secciones.getSecciones().generarBarraMenu(request.getSession()));
		
		out.println("<section>");
		out.println("<form>");
		out.println("<h1>Historico de planificaciones</h1><br>");
		out.println("<ul>");
		//out.println(GestorFicheros.getGestorFicheros().listarFicheros(idUsuario, 1));Listar planificaciones del usuario
		out.println("</ul>");
		
		out.println("<h1>Planificación actual</h1>");
		out.println("<ul>");
		//out.println(GestorFicheros.getGestorFicheros().listarFicheros(idUsuario, 2));Mostrar de talle planificación actual
		out.println("</ul>");
		
		out.println("<h1>Dieta personalizada</h1><br>");
		out.println("<ul>");
		//out.println(GestorFicheros.getGestorFicheros().listarFicheros(idUsuario, 3));
		out.println("</ul>");
		
		out.println("<input type=\"submit\" value=\"Eliminar\"></form>");
		
		//TODO submit
		
		
		//TODO: volver a dejar como estaba
		/*String user=null;
		if(request.getSession()!=null)user=request.getSession().getAttribute("user_id").toString();
		try {
			out.println(GestorFicheros.getGestorFicheros().listarFicheros(user));
		} catch (NumberFormatException e)
		{
			request.getRequestDispatcher("WEB_OP/error/404error.jsp").forward(request, response);
		} */
		
		//TODO id usuario

		out.println("</section>");

		//aside 
		out.println(Secciones.getSecciones().generarLateral());
		//web foot
		out.println(Secciones.getSecciones().generarPie());

		out.println("</body>");
		out.println("</html>");
	}

	
	
	
}
