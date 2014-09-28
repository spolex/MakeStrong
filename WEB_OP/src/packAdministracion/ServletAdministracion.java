package packAdministracion;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import packEstructuraPag.Secciones;
import packGestorRecursos.GestorRecursos;

/**
 * Servlet implementation class ServletAdministracion
 */
@WebServlet("/ServletAdministracion")
public class ServletAdministracion extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletAdministracion() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	
	private void processRequest(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException
	{
		/*request.getSession().setAttribute("user_id", "1");
		request.getSession().setAttribute("user_name", "David");*/
		String idUsuario=request.getSession().getAttribute("user_id").toString();
		
		
		
		// Le decimos al navegador que lo que vamos a devolver es un HTML
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();

		out.println("<html>");
				 
		//Se imprime la cabecera de la página
		out.println(Secciones.getSecciones().generarCabecera("Inicio de usuario"));
					
		out.println("<body>");

		//Se imprime la barra de titulo
		out.println(Secciones.getSecciones().generarTitulo("Make Yourself Strong"));
		//Se imprime la barra de menus
		out.println(Secciones.getSecciones().generarBarraMenu(request.getSession()));
		
		
		
		out.println("<form>");
		out.println("<h1>Usuarios del sistema</h1><br>");
		out.println("<ul>");
		out.println(GestorAdministracion.getGestorAdministracion().listarUsuarios());
		out.println("</ul>");
		
		out.println("<h1>Recursos</h1>");
		out.println("<ul>");
		out.println(GestorRecursos.getGestorFicheros().listarFicheros(idUsuario, 4));
		out.println("</ul>");
		
		out.println("<input type=\"submit\" value=\"Eliminar\"></form>");
		
		//TODO submit
		
		out.println("</section>");

		//Se imprime el lateral
		out.println(Secciones.getSecciones().generarLateral());
		//Se imprime el pie de página
		out.println(Secciones.getSecciones().generarPie());

		out.println("</body>");
		out.println("</html>");
		
	}
	

}
