<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la página
	out.println(Secciones.getSecciones().generarCabecera("Inicio"));
%>
<body>

<%
	//Se imprime la barra de menús
	out.println(Secciones.getSecciones().generarBarraMenu(session));
	//Se imprime la barra de título
	out.println(Secciones.getSecciones().generarTitulo("Make Strong Yourself"));
	
%>

<section>
			<h1>Empieza la fiesta ;-)</h1>
			<p>Por fín me he decidido a empezar por la web, no seais muy críticos, esto es una semilla jejeje</p>
			<!--<p>Esta página está orientada al ámbito académico y permite a los estudiantes practicar problemas planteados en clase.</p>
			<p>Los alumnos disponen de aplicaciones en línea que les permiten resolver determinados tipos de ejercicios de cara a comprobar soluciones... o ahorrarse un trabajillo ;-).</p>
			<p>A continuación describimos las funcionalidades que encontrarás en la página.</p>-->

			<article>
				<h2>Noticias de cabecera</h2>
				<!--<p>Podr&aacute;s resolver problemas directamente desde la p&aacute;gina web sin necesidad de instalar ning&uacute;n programa en tu ordenador (salvo un navegador).</p>
				<p>Las aplicaciones disponibles, en el apartado de herramientas, son las siguientes:</p>
				
				<h4>MRP</h4>
				<p>Se trata de un método para gestionar la producción. Nos permite conocer los requerimientos de materiales o productos que necesitamos fabricar o pedir a lo largo de un periodo de tiempo para fabricar un determinado producto final.</p>
				<p>Mediante la aplicación, se puede desarrollar un MRP completo sin necesidad de echar cuentas.</p>
				<p>Simplemente introduce los datos indicados para cada elemento del problema y la tabla se calculará automáticamente</p>
				<p>Mediante su interfaz web podrás ver el resultado de una tabla o el ejercicio completo</p>
				<p>Además, la aplicación incluye las siguientes funcionalidades:</p>
				<ul>
					<li>Guardado del progreso: podrás guardar un ejercicio a medio hacer para terminarlo en otro momento. Esta opción generará un archivo que podrás guardar en tu ordenador.</li>
					<li>Cargado de un ejercicio: a partir del archivo anterior, podrás continuar un ejercicio en curso.</li>
					<li>Guardado de resultado: una vez terminado (o no) el ejercicio, podrás guardar todas las tablas en un archivo en tu ordenador.</li>
				</ul>
				
				<h4>Determinación de células de producción</h4>
				<p>Entre los diferentes métodos disponibles, uno de los utilizados se basa en los requerimientos de maquinaria de los componentes a fabricar. Con ellos se elabora una matriz que, tras ordenarla de acuerdo a unas reglas, nos permite identificar las células de producción o agrupaciones de maquinas que deben situarse próximas entre ellas.</p>
				<p>Se trata de un método fácil de aplicar, pero resulta difícil no acabar mareándose en el intento. Mediante esta simple aplicación podrás obtener la matriz resultado ordenada a partir del enunciado del problema.</p>
				<p>Posteriormente, podrás exportar el resultado a tu ordenador mediante un fichero.</p>-->
			</article>
			
			<article>
				<h2>Identificación de usuarios</h2>
				<p>Los usuarios registrados en la página tendrán la ventaja de...</p>
				<p>En su página principal se mostrarán diferentes historicos de la evolución...</p>
				
				<h3>Administrador</h3>
				<p>Entre los usuarios se distingue la figura del administrador. Se encarga de la gestión de los usuarios del sistema y de sus archivos.</p>
				<p>Todas las peticiones de registro son autorizadas por él antes de proporcionar acceso al sistema a los usuarios.</p>
				<p>Además se contempla la figura del colaborador que tendrá la capacidad de añadir artículos</p>
			</article>

			<article>
				<h2>Entrenamientos</h2>
				<p>El material mencionado a continuación se encuentra en el apartado "Entrenamientos" y solo está disponible para usuarios registrados.</p>
				<p>Además de incluirán calculadoras de RM.</p>
				<p>También se permite el aceso a diferentes rutinas de fuerza, hipertrofia y consejos de nutrición y suplementación.</p>
				<p>Por último, se ofrecen algunos recursos teóricos sobre los músculos que intervienen en los ejercicios básicos?.</p>
			</article>
			
			
		</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de página
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>