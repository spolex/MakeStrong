package packGestionUsuarios;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

import packGestorBD.SGBD;

/**
 * Parameterized queries to avoid SQLinjection.
 * @author Spolex2014.
 *
 */
public class GestorUsuarios {
	
	private static GestorUsuarios mGestorUsuarios = new GestorUsuarios();
	
	private GestorUsuarios(){}
	
	public static GestorUsuarios getGestorUsuarios()
	{
		return mGestorUsuarios;
	}
	
	/**
	 * An user is added to the database system.
	 * @param correo
	 * @param nombre
	 * @param contrasena
	 * @return true if user is added,otherwise false. 
	 * @throws ClassNotFoundException 
	 * @throws SQLException 
	 */
	public boolean anadirUsuario(String correo, String nombre, String contrasena, String pathContexto) 
			throws SQLException,ClassNotFoundException 
	{
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query ="SELECT * FROM usuario  WHERE nombre = ? OR correo = ?";
		statement = (PreparedStatement) connection
				.prepareStatement(query);
		statement.setString(1, nombre);
		statement.setString(2, correo);
		rs = statement
				.executeQuery();
		
		if(rs.next())
		{
			//Connection resources are freed.
			rs.close();
			return false;				
		}	
		//Connection resources are freed.
		rs.close();	
		String insertion ="INSERT INTO usuario (nombre,correo,contrasena)"
		+ "VALUES('"+nombre+"','"+correo+"',"
			+"sha1('"+contrasena+"'))";
			SGBD.getSGBD().execSQL(insertion);				
		return true;		
	}

	/**
	 * check the credentials in the database
	 * @param nombre
	 * @param contrasena
	 * @return if there is, the id of the user who is logged, null otherwise. 
	 * @throws SQLException 
	 * @throws ClassNotFoundException 
	 */
	public String login(String nombre, String contrasena) throws SQLException, ClassNotFoundException
	{	
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query = "SELECT id FROM usuario  "
				+ "WHERE usuario.nombre= ?"
				+ "AND usuario.contrasena= sha1(?)";
		statement = (PreparedStatement) connection
				.prepareStatement(query);
		statement.setString(1, nombre);
		statement.setString(2, contrasena);
		
		rs = statement.executeQuery();
		if(rs.next())
		{
			//connection resources are freed
			String user_id = rs.getString("id");
			rs.close();
			return user_id;
			
		}
		else
		{
			//connection resources are freed
			rs.close();
			return null;
		}
	}
	
	/**
	 * En caso de que en la base de datos exista un usuario con el mismo nombre o email devuelve true, en otro caso false;
	 * @param correo
	 * @param nombre
	 * @return
	 * @throws SQLException
	 */
	
	public boolean comprobarAdmin(String id)
	{
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query = "SELECT administrador FROM usuario WHERE id= ?";
		try 
		{
			statement = (PreparedStatement) connection.prepareStatement(query);
			statement.setString(1, id);
			rs = statement.executeQuery();
			if(rs.next())
			{
				boolean administra =rs.getBoolean("administrador");
				rs.close();
				return administra;
			}
			rs.close();
		} 
		catch (SQLException e2) 
		{
			e2.printStackTrace();
		}		
		return false;
	}
	/**
	 * 
	 * @param correo
	 * @param nombre
	 * @return
	 */
	private boolean findUser(String correo, String nombre) 
	{
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query = "SELECT * FROM usuario WHERE nombre = ? OR correo = ?";
		try 
		{
			statement = (PreparedStatement) connection.prepareStatement(query);
			statement.setString(1, nombre);
			statement.setString(2, correo);
			rs = statement.executeQuery();
			if(rs.next())
			{
				rs.close();
				return true;
			}
			rs.close();
		} 
		catch (SQLException e2) 
		{
			e2.printStackTrace();
		}		
		return false;
	}
	/**
	 * Update the user's identified data by id in the database.
	 * @param id
	 * @param nombre
	 * @param correo
	 * @param contrasena
	 * @return if it's possible return true, false otherwise.
	 * @throws SQLException 
	 * @throws ClassNotFoundException 
	 */
	public boolean cambiarDatos(String id, String nombre, String correo, String contrasena) 
			throws SQLException 
	{
		if(findUser(correo, nombre))
		{
			return SGBD.getSGBD()
			.execSQL("UPDATE usuario SET nombre = '" + nombre + "',"
					+ "usuario.correo = '" + correo + "', "
							+ "contrasena = sha1('" + contrasena + "') "
									+ "WHERE id='" + id + "'");
		}
		return false;
	}
	/**
	 * 
	 * @param login
	 * @return
	 */
	public boolean comprobarColaborador(String login) {
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query = "SELECT colaborador FROM usuario WHERE id= ?";
		try 
		{
			statement = (PreparedStatement) connection.prepareStatement(query);
			statement.setString(1, login);
			rs = statement.executeQuery();
			if(rs.next())
			{
				boolean colabora = rs.getBoolean("colaborador");
				rs.close();
				return colabora;
			}
			rs.close();
		} 
		catch (SQLException e2) 
		{
			e2.printStackTrace();
		}		
		return false;
	}

	/**
	 * 
	 * @param login
	 * @return
	 */
	public boolean comprobarUsuarioRegistrado(String login) {
		
		PreparedStatement statement = null;
		Connection connection = null;
		ResultSet rs =null;
		
		connection = (Connection) SGBD.getSGBD().getConexion();
		String query = "SELECT * FROM usuario WHERE id= ?";
		try 
		{
			statement = (PreparedStatement) connection.prepareStatement(query);
			statement.setString(1, login);
			rs = statement.executeQuery();
			if(rs.next())
			{
				rs.close();
				return true;
			}
			rs.close();
		} 
		catch (SQLException e2) 
		{
			e2.printStackTrace();
		}		
		return false;

	}
}
