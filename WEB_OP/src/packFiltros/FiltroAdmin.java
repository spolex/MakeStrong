package packFiltros;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Servlet Filter implementation class FiltroAdmin
 */
public class FiltroAdmin implements Filter {

    /**
     * Default constructor. 
     */
    public FiltroAdmin() {
        }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		// Restringe el acceso a todo aquel que no sea el administrador.
		// Comprueba en sesión si el admin está logueado. Si es así se muestra el recurso.
		// Si no, "AccesoRestringido"
		
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		HttpSession session = httpRequest.getSession();
		
		Object admin = session.getAttribute("admin");
		if(admin == null)
		{
			//Si el usuario no es admin, le denegamos el acceso
			httpRequest.getRequestDispatcher("/error/AccesoDenegado.jsp").forward(request, response);
			return;
		}

		// pass the request along the filter chain
		chain.doFilter(request, response);
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
	}

}
