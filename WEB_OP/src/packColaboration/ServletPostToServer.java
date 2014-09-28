package packColaboration;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.servlet.ServletRequestContext;

/**
 * Servlet implementation class ServletPostToServer
 */
@WebServlet("/ServletPostToServer")
public class ServletPostToServer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletPostToServer() {
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
	@SuppressWarnings("rawtypes")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
				
				//Ruta donde se guardara el fichero
				PrintWriter out = response.getWriter();
				String id = request.getSession().getAttribute("user_id").toString();
				File destino=new File(getServletContext().getRealPath("")+"/usuarios/"+id+"/images");
				String titulo="";
				String post="";
				String nombreI="";
				//Si no existe crea los ficheros necesarios.
				if(!destino.exists()){
					destino.mkdirs();
				}
				if(destino.exists())
				{		
					// Convertimos el HTTPRequest en un ContextRequest,
					// este paso es necesario en la ultima version,
					// ya que los metodos de las versiones anteriores
					// se han quedado desfasados.
					ServletRequestContext src=new ServletRequestContext(request);
				
					//Si el formulario es enviado con Multipart
					if(ServletFileUpload.isMultipartContent(src)){
					//Necesario para evitar errores de NullPointerException
					DiskFileItemFactory factory = new DiskFileItemFactory((1024*1024),destino);
					//Creamos un FileUpload
					ServletFileUpload upload=new  ServletFileUpload(factory);
					//Procesamos el request para que nos devuelva una lista
					//con los parametros y ficheros.
					List lista = null;
					try 
					{
						lista = upload.parseRequest(src);
					} catch (FileUploadException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					File file= null;
					//Recorremos la lista.
					Iterator it = lista.iterator();
					while(it.hasNext())
					{
						//Rescatamos el fileItem
						FileItem item=(FileItem)it.next();
						//Comprobamos si es un campo de formulario
						if(item.isFormField())
						{
							//es un campo del formulario, obtenemos clave y valor:
							String key = item.getFieldName();
							String value = item.getString();
							//Hacemos lo que queramos con el.
							switch (key) {
							case "titulo":	
								titulo = value;
								break;
							case "postComment":
								post = value;
								break;
							default:
								break;
							}
						}
						else
						{
							//Si no, es un fichero y lo subimos al servidor.
							//Primero creamos un objeto file a partir del nombre del fichero.
							file=new File(item.getName());
							//obtenemos el nombre de la imagen para la BD.
							nombreI = item.getName().substring(0, item.getName().length()-4);
							//Lo escribimos en el disco
							// usando la ruta donde se guardara el fichero
							// y cogiendo el nombre del file
							// Nota: Se podria hacer usando el objeto item en vez del file directamente
							// Pero esto puede causar incompatibilidades segun que navegador, ya que 
							// algunos solo pasan el nombre del fichero subido, pero otros
							// como Iexplorer, pasan la ruta absoluta, y esto crea un pequeño problema al escribir
							// el fichero en el servidor.
							out.println(destino);
							try 
							{
								item.write(new File(destino,file.getName()));
								GestorColaboracion.getMiColaboracion()
								.guardarPost(titulo, new File(destino,file.getName()).getPath(), nombreI, post, Integer.valueOf(id));
								out.println("<script>alert(\"Post añadido a la BD\")</script>");
							} 
							catch (Exception e) 
							{
								// TODO Auto-generated catch block
								e.printStackTrace();
							}				
						}
					}
				}
			}
				//resources are freed;
				out.close();
	}

}
