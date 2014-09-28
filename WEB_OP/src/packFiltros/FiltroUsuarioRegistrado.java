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
 * Servlet Filter implementation class FiltroUsuarioRegistrado
 */
public class FiltroUsuarioRegistrado implements Filter {

    /**
     * Default constructor. 
     */
    public FiltroUsuarioRegistrado() {
       
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
		
		Object usuario = null;
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		HttpSession session = httpRequest.getSession();
		usuario = session.getAttribute("user_id");
		if(usuario == null)
		{
			//Como no hay un usuario logueado, redirigimos a la identificación
			//TODO: poner la redireccion al nuevo jsp de identificacion
			httpRequest.getRequestDispatcher("/Identificacion").forward(request, response);
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
