package packGestionUsuarios;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Identificacion
 */
public class ServletIdentificacion extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletIdentificacion() {
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
		
		String nombre=null;
		String contrasena=null;
				
		
		nombre=request.getParameter("nombre").toString();
		contrasena=request.getParameter("contrasena").toString();
		
		try 
		{
			String login = GestorUsuarios.getGestorUsuarios().login(nombre, contrasena);

			if(login!=null)
			{
				request.getSession().setAttribute("user_id", login);
				request.getSession().setAttribute("user_name", request.getParameter("nombre"));
				if(GestorUsuarios.getGestorUsuarios().comprobarAdmin(login))
				{
					request.getSession().setAttribute("admin",true);
				}
				if(GestorUsuarios.getGestorUsuarios().comprobarColaborador(login))
				{
					request.getSession().setAttribute("colaborador", true);
				}
				if(GestorUsuarios.getGestorUsuarios().comprobarUsuarioRegistrado(login))
				{
					request.getSession().setAttribute("registrado", true);
				}
				request.getRequestDispatcher("/InicioUsuario").forward(request, response);
			}
			else 
			{			
				request.getRequestDispatcher("error/LoginIncorrecto.jsp").forward(request,response);
			}
			return;
		}
		catch (ClassNotFoundException | SQLException e) 
		{			
			request.getRequestDispatcher("general/Inicio.jsp").forward(request, response);
			return;
		}
	}

}
