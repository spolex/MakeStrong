package packAdministracion;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import packGestorRecursos.GestorRecursos;

/**
 * Servlet implementation class ServletEliminarRecurso
 */
public class ServletEliminarRecurso extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletEliminarRecurso() {
        super();
       
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String archivo =request.getParameter("archivos").toString();
		
		GestorRecursos.getGestorFicheros().borrarFichero(archivo);
		request.getRequestDispatcher("general/Admin.jsp").forward(request, response);
	}

}
