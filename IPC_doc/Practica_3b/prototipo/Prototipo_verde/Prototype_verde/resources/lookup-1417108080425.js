(function(window, undefined) {
  var dictionary = {
    "7828f77c-1a10-4c2d-8a60-237004150476": "PREVIO_EJERCICIO",
    "994afe59-6943-4428-91fb-b22e4af3b151": "DIETA_PRINCIPAL",
    "4fbdc2b4-3243-46e3-b585-de9d0dc4d778": "HOLA_PERFIL",
    "0fa01105-d7b6-41a0-9a8b-4574a456ce90": "CREAR_PERFILES_2",
    "921eeeaf-d337-4f5c-aa12-822a500965ec": "lista_AMIGOS",
    "b68f3673-0e3b-418e-a310-4c70c16e338b": "AVISO_comida",
    "945bee81-6d78-4354-8a04-def86427b8f0": "AVISO_AMIGO",
    "7b483316-78e2-46ce-a5ce-e20cd58f75b0": "TIEMPO_ENTRENAR",
    "43c3e595-4668-4d80-87f4-a5b39456088f": "AVISO_BUEN_PROVECHO",
    "5cf85734-ca6b-4ef6-9b1c-49b4f620a4db": "ABDOMEN",
    "0465c0d2-1644-4957-8930-84bd82a7b01d": "INICIO",
    "7cbd7b3f-f4e8-46f3-931c-fac073ba750e": "QUE_HACER",
    "a1f9abd2-d28f-4e97-bd99-24764e1577d8": "MENU ANDROID",
    "6a330461-d243-490e-aa60-ef57e75b3d45": "ENTRENO",
    "eb74577e-9b5c-4caf-a9e8-4404de5cbb15": "QUE_EJERCICIO_ESPECIFICO_HACER",
    "5b12b955-31bf-4280-b5a2-56f2267d6af0": "AVISO_ENTRENO",
    "b6f273f4-3145-438a-9895-7af90f8bf01e": "SELECCION_RUTA",
    "9a879262-bc40-4462-9d4d-2d976c7f663a": "PERFILES",
    "4091e0e7-bffc-4ef8-90b8-4fedf5b479e1": "CREAR_PERFILES",
    "8ad111f7-4ec5-432a-937b-fbb0f0087b08": "EJERCICIO2",
    "7a70cd15-78a9-4361-aa7d-f68412d78004": "SPINNING",
    "80107560-40e1-4f85-be44-d9b2a919d9ed": "PREVIO_ALIMENTOS",
    "576ce3ad-f37e-46a3-82c9-1726f30a12ed": "TABLA_EJERCICIOS",
    "aad76d2a-23cf-4384-9dee-5893aeba5ebd": "PAUSADO_EN_RUTA",
    "382186e0-df20-4ffa-ac73-3e91fee3605c": "COMIDA_ALTERNATIVA",
    "03714870-62e4-4926-bc3c-7f2596739b09": "ESTADISTICAS",
    "81744a5d-7f37-4d80-b90d-ee8865d1f210": "EJERCICIO",
    "75988922-7f0b-4c2e-9c3c-87e27700399f": "DESAYUNO_ALTERNATIVA",
    "7d1f5546-e9aa-4419-b785-7843540d9270": "COMENZAR_RUTA",
    "6c011e8a-b1a5-4423-832b-109b5912c002": "AMIGOS_ENCONTRADOS",
    "56868e5d-fd0a-4a40-b6f6-7058200b2112": "VER_DIETA",
    "78074bc5-43d5-4429-abfe-a1740c189a1d": "AVISO_DIETA_LISTA imported",
    "3195d235-6686-4b83-88e5-ab646240b406": "MODIFICAR_DIETA",
    "c98f48de-8ec9-4e24-a232-7b6d53fb90c0": "ALIMENTOS",
    "51b2d9d8-db68-45e5-95be-07c9e537c94b": "BUSCAR_AMIGOS",
    "8c157654-e1dc-4fde-9e04-9ee5065b3e36": "ESTAR_EN_RUTA",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);