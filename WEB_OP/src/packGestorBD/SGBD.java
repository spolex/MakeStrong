package packGestorBD;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.mysql.jdbc.jdbc2.optional.MysqlDataSource;

/**
 * Singleton pattern class to mysql sentences control. 
 * @author spolex
 *
 */
public class SGBD {
	
	private static SGBD mSGDB = new SGBD();
	
	private SGBD()
	{	
		
	}
	
	public static SGBD getSGBD()
	{
		return mSGDB;
	}
	
	/**
	 * @return BD connection
	 */
	@SuppressWarnings("finally")
	public Connection getConexion()
	{
		Connection conexion = null;
		 try {
 
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("spolex");
        dataSource.setPassword("MZ7qWcC7Hn");
        dataSource.setDatabaseName("MakeStrong");
        dataSource.setServerName("localhost");

         conexion = dataSource.getConnection();
         
		 } catch (SQLException e) {
			System.out.println("Error al conectar a la base de datos");
			e.printStackTrace();
		}
		finally
		{
			return conexion;
		}
	}
	
	/**
	 * SQL commands that do not return results
	 * @param orden
	 * @return true if the execution return rows,false otherwhise. 
	 */
	public boolean execSQL(String orden)
	{
		Connection conexion = this.getConexion();
		
		if(conexion != null)
		{
			
			try 
			{
				//Sentence is created.
				Statement s = conexion.createStatement();
				//command is executed.
				int rdo = s.executeUpdate(orden);
				//connection is closed
				conexion.close();
				return rdo!=0;			
			} 
			catch (SQLException e) 
			{
				System.out.println("Error al ejecutar la sentencia SQL");
				e.printStackTrace();
			}
	
		}
		return false;
	}
	
	/**
	 * SQL commands that returns results are executed.
	 * @param the statement to execute.
	 * @return if it was possible to createResultadoSQL, otherwise null.
	 */
	public ResultSet consultaSQL(String consulta)
	{
		Connection conexion = this.getConexion();
		
		if(conexion != null)
		{
			
			try {
				//statement is created
				Statement s = conexion.createStatement();
				//the results are obtained.
				ResultSet rs = s.executeQuery(consulta);
				//ResultadoSQL is created to return
				//connection will close since ResultadoSQL
				return rs;
			
			} catch (SQLException e) {
				System.out.println("Error al ejecutar la sentencia SQL");
			}
	
		}
		//if connection fails or the execution fail return null.
		return null;
	}

}
