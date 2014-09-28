package packmodelo;

import java.awt.image.BufferedImage;

public class Post 
{
	private int id;
	private int idUser;
	private String titulo;
	private String post;
	private String nombreI;
	private BufferedImage imagen;
	private java.sql.Date fecha;
	
	public int getId() 
	{
		return id;
	}
	public void setId(int id) 
	{
		this.id = id;
	}
	public int getIdUser() {
		return idUser;
	}
	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getPost() {
		return post;
	}
	public void setPost(String post) {
		this.post = post;
	}
	public String getNombre() {
		return nombreI;
	}
	public void setNombre(String nombreI) {
		this.nombreI = nombreI;
	}
	public BufferedImage getImagen() {
		return imagen;
	}
	public void setImagen(BufferedImage imagen) {
		this.imagen = imagen;
	}
	public java.sql.Date getFecha() {
		return fecha;
	}
	public void setFecha(java.sql.Date fecha) {
		this.fecha = fecha;
	}
}
