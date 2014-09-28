package packColaboration;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.imageio.ImageIO;

import packGestorBD.SGBD;
import packmodelo.Post;

import com.mysql.jdbc.Blob;
import com.mysql.jdbc.Connection;
import com.mysql.jdbc.PreparedStatement;

public class GestorColaboracion 
{
	private static GestorColaboracion mGestorColaboracion = new GestorColaboracion();
	
	private GestorColaboracion(){
		
	}
	
	public static GestorColaboracion getMiColaboracion(){
		return mGestorColaboracion;
	}
	/**
	 * recibe una cadena String con la ruta de la imagen en disco y el nombre de la imagen
	 * (para cuando se quiera leer y guardar de nuevo a disco), 
	 * despues se utiliza el metodo setBinaryStream para insertar en la Base de Datos.
	 * @param ruta
	 * @param nombre
	 * @return
	 */
	public boolean guardarPost(String titulo,String ruta,String nombre, String post,int idUser)
	{
	    String insert = "insert into post(imagen,nombre,titulo,post,idUsuario) values(?,?,?,?,?)";
	    FileInputStream fis = null;
	    PreparedStatement ps = null;
	    Connection conexion;
	    conexion = (Connection) SGBD.getSGBD().getConexion();	    
	    try {
	        conexion.setAutoCommit(false);
	        File file = new File(ruta);
	        fis = new FileInputStream(file);
	        ps = (PreparedStatement) conexion.prepareStatement(insert);
	        ps.setBinaryStream(1,fis,(int)file.length());
	        ps.setString(2, nombre);
	        ps.setString(3, titulo);
	        ps.setString(4, post);
	        ps.setInt(5, idUser);
	        ps.executeUpdate();
	        conexion.commit();
	        return true;
	    } 
	    catch (Exception ex) 
	    {
	        Logger.getLogger(Connection.class.getName()).log(Level.SEVERE, null, ex);
	    }
	    finally
	    {
	        try 
	        {
	            ps.close();
	            fis.close();
	        } catch 
	        (Exception ex) 
	        {
	            Logger.getLogger(Connection.class.getName()).log(Level.SEVERE, null, ex);
	        }
	    }        
	    return false;
	}
	/**
	 * 
	 * @return
	 */
	public ArrayList <Post> getPosts(){
		ArrayList<Post> listPosts = new ArrayList<Post>();
		ResultSet rs = SGBD.getSGBD().consultaSQL("SELECT * FROM post ORDER BY fecha ASC");
		try 
		{
			while(rs.next())
			{
				Post post=new Post();
	            java.sql.Blob blob = rs.getBlob("imagen");
	            String nombre = rs.getObject("nombre").toString();
	            int idUsuario=rs.getInt("idUsuario");
	            int idPost = rs.getInt("id");
	            String titulo = rs.getString("titulo"); 
	            String writedPost = rs.getString("post");
	            java.sql.Date fecha = rs.getDate("fecha");
	            byte[] data = blob.getBytes(1, (int)blob.length());
	            BufferedImage img = null;
	            try 
	            {
	                img = ImageIO.read(new ByteArrayInputStream(data));
	            } 
	            catch (IOException ex) 
	            {
	                Logger.getLogger(Connection.class.getName()).log(Level.SEVERE, null, ex);
	            }
	            
	            post.setId(idPost);
	            post.setIdUser(idUsuario);
	            post.setPost(writedPost);
	            post.setTitulo(titulo);
	            post.setImagen(img);
	            post.setNombre(nombre);
	            post.setFecha(fecha);
	            listPosts.add(post);
			}
		rs.close();
		}
		catch (SQLException e) 
		{
			e.printStackTrace();
		}
		return listPosts;
	}
	
	/**
	 * 
	 * @param img
	 * @param path
	 * @param name
	 */
	public File saveImg(BufferedImage img,String path, String name){
		try
		{
			File imgFile = new File(path+"/"+name);
			ImageIO.write(img, "jpg", imgFile);
			return imgFile;
		}
		catch(IOException e)
		{
			System.out.println("Error de escritura \n"+e.getMessage());
		}
		return null;
	}
}
