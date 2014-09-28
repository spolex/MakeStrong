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
 * Servlet Filter implementation class FiltroPropietario
 */
public class FiltroPropietario implements Filter {

    /**
     * Default constructor. 
     */
    public FiltroPropietario() {
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
		//Comprueba que el objeto al que se va a acceder pertenece al usuario que lo accede
		//Si el usuario es el propietario, se le muestra
		//Si no, error "Acceso denegado"
		
		String usuario=null;
		String uri=null;
		String [] propietario = null;
		boolean enc=false;
		
		HttpServletRequest httpRequest = (HttpServletRequest)request;
		HttpSession session = httpRequest.getSession();
		uri = httpRequest.getRequestURI();
		
		if(uri!=null)propietario = uri.split("/");
		
		if(propietario!=null)
		{
			//si hay un usuario logueado, buscamos el la URI que el recurso al que accede es de su propiedad
			usuario = (String) session.getAttribute("user_id");
			if(usuario != null)
			{
				for(int i=0;i<propietario.length;i++)
				{
					if(propietario[i].equals(usuario))
					{
						enc = true;							
					}
				}
			}
		}
		//El administrador es la excepción, puede acceder a todo
		Object admin = session.getAttribute("administrador");
		if(admin != null)
		{
			enc = true;
		}
		
		if(!enc)
		{
			//Si el usuario no tiene permiso, le denegamos el acceso
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
