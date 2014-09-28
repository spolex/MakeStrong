package packGestionUsuarios;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import packEstructuraPag.Secciones;

/**
 * Servlet implementation class ServletRegistro
 */
public class ServletRegistro extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletRegistro() {
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
		String correo=null;
		String nombre=null;
		String contrasena=null;
		String reiterada=null;
		PrintWriter out = response.getWriter();
		
		correo=request.getParameter("correo").toString();
		nombre=request.getParameter("nombre").toString();
		contrasena=request.getParameter("contrasena").toString();
		reiterada=request.getParameter("reiterada").toString();
		
		if(reiterada.equals(contrasena))
		{
			try 
			{
				boolean add = GestorUsuarios.getGestorUsuarios().anadirUsuario(correo, nombre, contrasena, request.getServletContext().getRealPath(""));
				
				
				if(add)
				{
					out.println("<script type=\"text/javascript\">");  
					out.println("alert('Registrado con &eacutexito');");  
					out.println("</script>");
					request.getRequestDispatcher("general/Inicio.jsp").forward(request, response);
					return;
				}
				else 
				{
					out.println("<script type=\"text/javascript\">");  
					out.println("alert('No ha sido posible el registro');");  
					out.println("</script>");
					request.getRequestDispatcher("general/Registro.jsp").forward(request, response);
					return;

				}
				
			}
			catch (ClassNotFoundException | SQLException  e) 
			{				
				request.getRequestDispatcher("general/Registro.jsp").forward(request, response);
				return;
			}
		}
		else
		{
			request.getRequestDispatcher("general/Registro.jsp").forward(request, response);
			Secciones.getSecciones().generarError("Las contrase&ntilde;as no coinciden");
			return;
		}
	}

}
