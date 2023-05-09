//*****************************
//Este código define una clase llamada BasePage que tiene tres métodos asincrónicos:

//1-abrir(ruta): Este método toma una ruta como argumento y utiliza browser.url para navegar a esa ruta.
//2-clickearElemento(elemento): Este método toma un objeto elemento como argumento y espera a que el elemento 
//sea clickeable utilizando waitForClickable con un tiempo de espera de 10 segundos (definido como PAGE_TIMEOUT).
// Luego hace clic en el elemento utilizando elemento.click().
//3-vaciarCampoYEnviarTexto(elemento, texto): Este método toma un objeto elemento y un texto como argumentos. 
//Espera a que el elemento sea clickeable, lo borra con clearValue, lo selecciona con elemento.click() y luego utiliza 
//elemento.keys(texto) para enviar el texto al elemento.
//La idea detrás de esta clase es proporcionar una base común para las páginas de un sitio web, permitiendo la interacción 
//con los elementos comunes de manera más eficiente y estandarizada. Por ejemplo, los métodos clickearElemento y 
//vaciarCampoYEnviarTexto podrían ser utilizados para interactuar con elementos como botones, cajas de texto y menús desplegables
// en diferentes páginas del sitio.


const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Abrir página
    * @param {String} ruta a la cual acceder
    */
   async abrir(ruta) {
       await browser.url(`${ruta}`);
   }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} elemento a clickear
    */
   async clickearElemento(elemento) {
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.click();
   }


   /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar 
    */
   async vaciarCampoYEnviarTexto(elemento, texto){
       await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
       await elemento.clearValue();
       await elemento.click();
       await elemento.keys(texto);
   }


}

 
