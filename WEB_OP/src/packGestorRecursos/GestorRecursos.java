package packGestorRecursos;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.PrintWriter;




import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;
import com.mysql.jdbc.Statement;

import packGestorBD.SGBD;

public class GestorRecursos {
	
	private static GestorRecursos mGestorRecursos = new GestorRecursos();
	
	private GestorRecursos(){}
	
	public static GestorRecursos getGestorFicheros()
	{
		return mGestorRecursos;
	}
	
	/**
	 * Asocia en la BD un fichero al usuario dado por la BD.
	 * Construye la ruta donde se guaradará el fichero en la BD
	 * 
	 * @param idUsuario
	 * @param tipo
	 * @param nombre
	 * @param directorio
	 * El directorio al que corresponde el contexto de la aplicación
	 * @return
	 */
	public String crearFichero(String idUsuario, int tipo, String nombre, String directorio)
	{
		
		//la ruta es /usuarios/id_usuario/tipo/nombre
		String path="/usuarios/"+idUsuario+"/"+tipo+"/"+nombre;
		
		//para poder mostrar un enlace accesible al usuario necesitamos añadir el contenedor
		String pathBD = "/WEB_OP"+path;
		SGBD.getSGBD().execSQL("INSERT INTO archivo VALUES ('"+nombre+"', '"+pathBD+"', '"+tipo+"', '"+idUsuario+"')");
		
		return path;
	}
	
	public String listarRecursos()
	{
		String rdo="";
		
		ResultSet consulta= SGBD.getSGBD().consultaSQL("SELECT nombre, path, tipo FROM archivo WHERE tipo='4'");
		
		
		try
		{
			if (!consulta.next())
			{
				rdo=rdo+"A&uacute;n no has realizado ning&uacute;n ejercicio";
			}
			else
			{
				consulta.beforeFirst(); //deja la consulta como cuando se realiza, sin apuntar a ninguna fila
				
				try 
				{
					while (consulta.next())
					{
						rdo=rdo+"<li><a href=\""+consulta.getString("path")+"\">"+consulta.getString("nombre")+"</a>";
					}
				}
				catch (SQLException e)
				{
					rdo=rdo+"Error al acceder a la base de datos.";
				}
			
			
				//Liberamos recursos de la conexion
				consulta.close();
			}
		} 
		catch (SQLException e1)
		{
			rdo=rdo+"Error al acceder a la base de datos.";
		}
		
		return rdo;
			
		
	}
	
	/**
	 * Borra el fichero indicado tanto de la BD como del servidor
	 * @param path
	 */
	public void borrarFichero(String path)
	{
		File archivo = new File(path);
		
		if(!archivo.delete())
		{
			// borrado fallido
		}
		
		SGBD.getSGBD().execSQL("DELETE FROM archivo WHERE path='"+path+"'");
	}
	
	/**
	 * Devuelve el PrintWriter del fichero indicado
	 * @param path
	 * @return
	 */
	public PrintWriter obtenerFichero(String path)
	{
		PrintWriter printer = null;
		try {
			printer = new PrintWriter(path);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		return printer;
	}
	
	/**
	 * Devuelve un string que contiene el código HTML de los ficheros del usuario y 
	 * tipo indicados en formato de lista HTML 
	 * 
	 * Cada elemento tiene un radio button (el grupo es el tipo)
	 * y Dará un enlace al recurso que representa
	 * @param idUsuario
	 * @return
	 * @throws NumberFormatException 
	 * @throws SQLException 
	 */
	public String listarFicheros(String idUsuario, int tipo) throws NumberFormatException
	{
		String rdo="";
	
		
		ResultSet consulta= SGBD.getSGBD().consultaSQL("SELECT nombre, path, tipo FROM archivo WHERE usuario='"+idUsuario+
				"' AND tipo='"+tipo+"'");
		
		
		try
		{
			if (!consulta.next())
			{
				rdo=rdo+"A&uacute;n no has realizado ning&uacute;n ejercicio";
			}
			else
			{
				consulta.beforeFirst(); //deja la consulta como cuando se realiza, sin apuntar a ninguna fila
				
				try 
				{
					while (consulta.next())
					{
						
						
						rdo=rdo+"<li><input type=\"radio\" name=\"archivos\" value=\"" +consulta.getString("path")+"\">"+
						"<a href=\""+consulta.getString("path")+"\">"+consulta.getString("nombre")+"</a>";
						
						
					}
				}
				catch (SQLException e)
				{
					rdo=rdo+"Error al acceder a la base de datos.";
				}
			
			
				//Liberamos recursos de la conexion
				consulta.close();
			}
		} 
		catch (SQLException e1)
		{
			rdo=rdo+"Error al acceder a la base de datos.";
		}
		return rdo;
	}	
}
