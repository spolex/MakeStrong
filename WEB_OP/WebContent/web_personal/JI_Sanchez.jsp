<%@ page import="packEstructuraPag.*" %>
<HTML LANG="Spanish">
	<HEAD>
	<TITLE>Jose Ignacio S&aacute;nchez</TITLE>
	<meta http-equiv="Content-Type" content="text/html; utf-8">
	<meta name="author" content="SPOLEX" >
	<META NAME="REPLY-TO" CONTENT="jisanchez003@ehu.es">
	<META NAME="DESCRIPTION" CONTENT="Web con datos personales, acÃ¡demicos y de experiencia laboral">
	<META NAME="KEYWORDS" CONTENT="Ingeniero informÃ¡tico,ingenierÃ­a,informÃ¡tico,sistemas,gestiÃ³n.">
	<META NAME="Resource-type" CONTENT="Archive">
	<META NAME="DateCreated" CONTENT="Wed, 12 February 2014 00:00:00 GMT+1">
	<META NAME="robots" content="ALL">
	
	<LINK REL=StyleSheet HREF="/WEB_OP/style/estilo.css" TYPE="text/css" />
	<LINK REL=StyleSheet HREF="/WEB_OP/style/centro_web_personales.css" TYPE="text/css" />
	
	</HEAD>
	
<body>

	<%
	//imprimimos el código de la barra de título y navegación de la página
	out.println(Secciones.getSecciones().generarTitulo("Spolex Development Studio")); 
	out.println(Secciones.getSecciones().generarBarraMenu(session));
	%>
	
	<section>
			<div class="centropagina">
			
			<br>
				<img src="imagenes/fotocarnet.jpg" alt="Retrato"  width="150" height="200">
				<h2>Informaci&oacute;n personal</h2>
					<table>
						<tr>
							<td>Nombre:</td>
							<td>J. Ignacio</td>
			
			</tr>
			<tr>
			<td>Apellidos:</td>
			<td>S&aacute;nchez M&eacute;ndez</td>
			</tr>
			
			<tr>
			<td>Email:</td>
			<td>jisanchez003@ikasle.ehu.es</td>
			</tr>
			
			
			<tr>
			<td>Fecha de Nacimiento:</td>
			<td>04/05/1981</td>
			</tr>
			
			</table>
			
			<h2>Informaci&oacute;n acad&eacute;mica</h2>
			<table>
			<tr>
			<td>Grado:</td>
			<td>Ingenier&iacute;a inform&aacute;tica de gesti&oacute;n y sistemas de la informaci&oacute;n</td>
			
			</tr>
			<tr>
			<td>Centro:</td>
			<td>Euiti. Bilbao</td>
			</tr>
			<tr>
			<td>Curso:</td>
			<td>Tercero</td>
			</tr>
			
			
			<tr>
			<td>Asignaturas pendientes <br> cursos anteriores:</td>
			<td>Ninguna</td>
			</tr>
			
			<tr>
			<td>Asignaturas en curso:</td>
			<td>Sistemas web, Sistemas de apoyo a la decisi&oacute;n, Gesti&oacute;n de proyectos, Sistemas de gesti&oacute;n de empresas y Administraci&oacute;n de bases de datos</td>
			</tr>
			</table>
			
			<br>
						
			<table>
			<tr>
			<td>Centro:</td>
			<td>IES Nicolas Larburu</td>
			</tr>
			<tr>
			<td>Ciclo Formativo:</td>
			<td>Superior en Construcciones MetÃ¡licas</td>
			</tr>
			
			<tr>
			<td>Curso:</td>
			<td>Finalizado</td>
			</tr>
			
			<tr>
			<td>Asignaturas pendientes <br> cursos anteriores:</td>
			<td>Ninguna</td>
			</tr>
			
			<tr>
			<td>Asignaturas en curso:</td>
			<td>Ninguna</td>
			</tr>
			</table>
			
			<h2>Experiencia profesional</h2>
			<table>
			<tr>
			<td>Curr&iacute;culum Vitae:</td>
			<td><a href="doc/JI_CV.pdf">CV JI. S&aacute;nchez M&eacute;ndez</a></td>
			</tr>
			</table>
			
			<h2>Aficiones</h2>
			<table>
			<tr>
			<td>Deportes:</td>
			<td>Crossfit,nataci&oacute;n, running</td>
			</tr>
			
			<tr>
			<td>Otras:</td>
			<td>M&uacute;sica, cine, lectura</td>
			</tr>
			</table>
			
			<br><br>
			</div>
	</section>
	
	<%
	//Imprimimos el cógigo correspondiente a la barra lateral y el pie de página
	out.println(Secciones.getSecciones().generarLateral());
	out.println(Secciones.getSecciones().generarPie());
	%>
</body>
</html>