package packAdministracion;

import java.sql.ResultSet;
import java.sql.SQLException;
import packGestorBD.SGBD;


public class GestorAdministracion {
	
	
	private static GestorAdministracion mGestorAdministracion = new GestorAdministracion();
	
	private GestorAdministracion(){}
	
	public static GestorAdministracion getGestorAdministracion()
	{
		return mGestorAdministracion;
	}
	
	/*public String listarRecursos(String id)
	{
		String rdo =GestorFicheros.getGestorFicheros().listarFicheros(id, 4);		
		
		return rdo;
	}*/
	
	public String listarUsuarios()
	{
		String rdo ="";
		
		ResultSet consulta= SGBD.getSGBD().consultaSQL("SELECT id, nombre FROM usuario");
		try 
		{
			while (consulta.next())
			{ 
				rdo=rdo+"<li><input type=\"radio\" name=\"usuarios\" value=\"" +consulta.getString("id")+"\">"
						+consulta.getString("nombre");
				
			}
		}
		catch (SQLException e)
		{
			rdo=rdo+"Error al acceder a la base de datos.";
		}
	
	
		//Liberamos recursos de la conexion
		try 
		{
			consulta.close();
		} 
		catch (SQLException e) 
		{
			e.printStackTrace();
		}		
		return rdo;
	}
	
	public void eliminarUsuario(String id)
	{		
		SGBD.getSGBD().execSQL("DELETE FROM usuario WHERE id='"+id+"'");		
	}
	

}
