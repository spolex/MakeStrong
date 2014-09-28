<%@ page import="packEstructuraPag.*" %>
<!DOCTYPE html>
<html>
<% 
	//Se imprime la cabecera de la p�gina
	out.println(Secciones.getSecciones().generarCabecera("Inicio"));
%>
<body>

<%
	//Se imprime la barra de men�s
	out.println(Secciones.getSecciones().generarBarraMenu(session));
	//Se imprime la barra de t�tulo
	out.println(Secciones.getSecciones().generarTitulo("Make Strong Yourself"));
	
%>

<section>
			<h1>Empieza la fiesta ;-)</h1>
			<p>Por f�n me he decidido a empezar por la web, no seais muy cr�ticos, esto es una semilla jejeje</p>
			<!--<p>Esta p�gina est� orientada al �mbito acad�mico y permite a los estudiantes practicar problemas planteados en clase.</p>
			<p>Los alumnos disponen de aplicaciones en l�nea que les permiten resolver determinados tipos de ejercicios de cara a comprobar soluciones... o ahorrarse un trabajillo ;-).</p>
			<p>A continuaci�n describimos las funcionalidades que encontrar�s en la p�gina.</p>-->

			<article>
				<h2>Noticias de cabecera</h2>
				<!--<p>Podr&aacute;s resolver problemas directamente desde la p&aacute;gina web sin necesidad de instalar ning&uacute;n programa en tu ordenador (salvo un navegador).</p>
				<p>Las aplicaciones disponibles, en el apartado de herramientas, son las siguientes:</p>
				
				<h4>MRP</h4>
				<p>Se trata de un m�todo para gestionar la producci�n. Nos permite conocer los requerimientos de materiales o productos que necesitamos fabricar o pedir a lo largo de un periodo de tiempo para fabricar un determinado producto final.</p>
				<p>Mediante la aplicaci�n, se puede desarrollar un MRP completo sin necesidad de echar cuentas.</p>
				<p>Simplemente introduce los datos indicados para cada elemento del problema y la tabla se calcular� autom�ticamente</p>
				<p>Mediante su interfaz web podr�s ver el resultado de una tabla o el ejercicio completo</p>
				<p>Adem�s, la aplicaci�n incluye las siguientes funcionalidades:</p>
				<ul>
					<li>Guardado del progreso: podr�s guardar un ejercicio a medio hacer para terminarlo en otro momento. Esta opci�n generar� un archivo que podr�s guardar en tu ordenador.</li>
					<li>Cargado de un ejercicio: a partir del archivo anterior, podr�s continuar un ejercicio en curso.</li>
					<li>Guardado de resultado: una vez terminado (o no) el ejercicio, podr�s guardar todas las tablas en un archivo en tu ordenador.</li>
				</ul>
				
				<h4>Determinaci�n de c�lulas de producci�n</h4>
				<p>Entre los diferentes m�todos disponibles, uno de los utilizados se basa en los requerimientos de maquinaria de los componentes a fabricar. Con ellos se elabora una matriz que, tras ordenarla de acuerdo a unas reglas, nos permite identificar las c�lulas de producci�n o agrupaciones de maquinas que deben situarse pr�ximas entre ellas.</p>
				<p>Se trata de un m�todo f�cil de aplicar, pero resulta dif�cil no acabar mare�ndose en el intento. Mediante esta simple aplicaci�n podr�s obtener la matriz resultado ordenada a partir del enunciado del problema.</p>
				<p>Posteriormente, podr�s exportar el resultado a tu ordenador mediante un fichero.</p>-->
			</article>
			
			<article>
				<h2>Identificaci�n de usuarios</h2>
				<p>Los usuarios registrados en la p�gina tendr�n la ventaja de...</p>
				<p>En su p�gina principal se mostrar�n diferentes historicos de la evoluci�n...</p>
				
				<h3>Administrador</h3>
				<p>Entre los usuarios se distingue la figura del administrador. Se encarga de la gesti�n de los usuarios del sistema y de sus archivos.</p>
				<p>Todas las peticiones de registro son autorizadas por �l antes de proporcionar acceso al sistema a los usuarios.</p>
				<p>Adem�s se contempla la figura del colaborador que tendr� la capacidad de a�adir art�culos</p>
			</article>

			<article>
				<h2>Entrenamientos</h2>
				<p>El material mencionado a continuaci�n se encuentra en el apartado "Entrenamientos" y solo est� disponible para usuarios registrados.</p>
				<p>Adem�s de incluir�n calculadoras de RM.</p>
				<p>Tambi�n se permite el aceso a diferentes rutinas de fuerza, hipertrofia y consejos de nutrici�n y suplementaci�n.</p>
				<p>Por �ltimo, se ofrecen algunos recursos te�ricos sobre los m�sculos que intervienen en los ejercicios b�sicos?.</p>
			</article>
			
			
		</section>

<%
	//Se imprime el lateral
	out.println(Secciones.getSecciones().generarLateral());
	//Se imprime el pie de p�gina
	out.println(Secciones.getSecciones().generarPie());
%>
</body>
</html>