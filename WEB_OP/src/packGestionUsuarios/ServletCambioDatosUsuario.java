package packGestionUsuarios;

import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import packClasesAux.StringMD;
import packGestorBD.SGBD;

/**
 * Servlet implementation class ServletCambioDatosUsuario
 */
public class ServletCambioDatosUsuario extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletCambioDatosUsuario() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{ 
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String nombre = request.getParameter("nombre").toString();
		String id = request.getSession().getAttribute("user_id").toString();
		String correo = request.getParameter("correo").toString();
		String contrasenaVieja=StringMD.getStringMessageDigest(request.getParameter("current").toString(), "SHA1");
		String contrasenaNueva=request.getParameter("new").toString();
		String check=request.getParameter("check").toString();
		
		
		
		try
		{
			if(contrasenaNueva.equals(check))
				
			{
				//TODO implementar obtener contrasena
				ResultSet resulSQL = SGBD.getSGBD().consultaSQL("SELECT contrasena FROM usuario WHERE id= '" + id + "'");
				if(resulSQL.next())
				{
					String actual=resulSQL.getString("contrasena");
					if(actual.equals(contrasenaVieja))
					{
						boolean change = GestorUsuarios.getGestorUsuarios().cambiarDatos(id, nombre, correo, contrasenaNueva);
						if(change)
						{
							request.setAttribute("changed", "<script>alert(\"Datos actualizados con éxito\")</script>");
							request.getRequestDispatcher("/InicioUsuario").forward(request, response);						
						}
						else
						{
							request.setAttribute("changed", "<script>alert(\"El usuario ya existe\")</script>");
							request.getRequestDispatcher("general/CambioDatos.jsp").forward(request, response);
							
						}
					}
					else
					{
						request.getRequestDispatcher("error/AccesoDenegado.jsp").forward(request, response);
					}
				}
			}
			else
			{		
				request.getRequestDispatcher("error/CambiarDatos.jsp").forward(request, response);

			}
		} 
		catch (SQLException e) 
		{
			request.getRequestDispatcher("error/404error.jsp");
		}
	}

}
