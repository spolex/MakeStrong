(function(window, undefined) {
  var dictionary = {
    "d808f98b-77f6-414b-a98f-ec6d58808539": "PREVIO_EJERCICIO",
    "474ca6aa-3191-4537-b3bb-a58cb0a5be17": "DIETA_PRINCIPAL",
    "52c1a31c-89ac-4489-a7d8-5cf1157e8f3b": "HOLA_PERFIL",
    "b277d3ab-c589-48a1-93c9-3784f391e64f": "CREAR_PERFILES_2",
    "a4f02a40-7827-49a8-bed1-e980e2513000": "lista_AMIGOS",
    "81e09c85-b019-4f54-84e0-3b83ab577975": "AVISO_comida",
    "9b055c63-b71d-48b6-8525-40eff0f60e77": "AVISO_AMIGO",
    "0deaf64c-7629-4b30-98c8-84dc29a7f060": "TIEMPO_ENTRENAR",
    "34c1909c-dc09-444b-b6f7-e1a6be754179": "AVISO_BUEN_PROVECHO",
    "8d270df3-021c-4194-87df-dd248edaf731": "ABDOMEN",
    "18af524a-05af-427d-9072-39827c941fe8": "INICIO",
    "09623057-22db-44ef-83a8-e908b5bb65ee": "QUE_HACER",
    "7de688f1-e89c-4355-8d0d-f0c7058ad5cb": "MENU ANDROID",
    "cd53f68f-2a1a-4cfe-a3e8-8e1a70ddef44": "ENTRENO",
    "e0d8eb09-233b-421b-921c-9ae8c6c051dd": "AVISO_ENTRENO",
    "d2936a2b-e2f3-478f-8e0c-ded95ea45282": "QUE_EJERCICIO_ESPECIFICO_HACER",
    "98d0230f-9b6f-4cb6-a884-744de8f7660c": "SELECCION_RUTA",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "PERFILES",
    "31600bed-3fa9-42bc-830b-4b2095f02fdf": "CREAR_PERFILES",
    "97cfb6e8-4b59-4ddd-82a9-b6f137ba065c": "EJERCICIO2",
    "d08a3115-a2f4-4468-9141-555d572702e3": "SPINNING",
    "2d2b6ed4-6088-4cdb-bf32-13204c239521": "PREVIO_ALIMENTOS",
    "4a6cac08-53e4-469a-98eb-30c748e5843b": "TABLA_EJERCICIOS",
    "0d68eeae-50a4-4746-b813-fcc716bc0862": "PAUSADO_EN_RUTA",
    "533c853a-55cf-47d8-81fb-f372ed44282a": "COMIDA_ALTERNATIVA",
    "3360fe9a-cd8c-4638-b5ac-625ec07a2e03": "ESTADISTICAS",
    "5d398b04-5669-4138-8eaf-af3915ca80b3": "EJERCICIO",
    "b820312a-204a-42d6-8797-1bc3259e1276": "DESAYUNO_ALTERNATIVA",
    "2338f027-6ef6-4576-9050-bbe8472558d1": "COMENZAR_RUTA",
    "49a92b66-9ad3-4fb0-bfcd-404a8c4373bd": "AMIGOS_ENCONTRADOS",
    "bdbfc239-d1c5-4cb5-899c-83e97619a5d7": "VER_DIETA",
    "b02db1a0-0014-4775-8e74-324263f09825": "AVISO_DIETA_LISTA imported",
    "cbe15515-480d-49d9-bf9c-6c2c7d4e83c9": "MODIFICAR_DIETA",
    "19a1e42e-d1c2-4891-83d9-6381e71a7e70": "ALIMENTOS",
    "55766d55-77ec-4d6b-a5c4-6a772429c166": "BUSCAR_AMIGOS",
    "db5ba225-a1b2-4201-8931-3684476aac08": "ESTAR_EN_RUTA",
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