import BasePage from '../Pages/base.page';

class HomePage extends BasePage {

   //WebElements

   get myAccount(){ return $("//a[@class='skip-link skip-account']//span[@class='icon']"); };

   get loginBtn() {return $("a[title='Log In']")}; 

   get registerBtn() {return $("a[title='Register']")};

   get logoutBtn() {return $('a[title="Log Out"]')};

   get searchBar(){ return $('#search') };
   
   get cartBtn(){return $("//span[normalize-space()='Cart']")};

   get homePageBarWomen(){ return $('li[class="level0 nav-1 first parent"] a[class="level0 has-children"]')};

   get homePageBarMen(){ return $( "li[class='level0 nav-2 parent'] a[class='level0 has-children']")};
   
   get homePageBarAccesories(){ return $( "(//a[@class='level0 has-children'][normalize-space()='Accessories'])[1]")}; 

   get homePageBarHomeDecor(){ return $( "li[class='level0 nav-4 parent'] a[class='level0 has-children']")}; 

   get homePageBarSale(){ return $( "li[class='level0 nav-5 parent'] a[class='level0 has-children']")}; 

   get homePageBarVip(){ return $( "a[class='level0 ']")};  


   //-------------------------------------------------------------------------------------------------------//


       /**
    * Clickea sobre la categoría correspondiente en la navbar
    * @param {String} category a la que ingresara
    */
       async clickOnCategory(category) {
        addStep(`Clicks in ${category}`);
        const categoryName = $(`//a[text()="${category}"]`);
        await categoryName.click();
     }



  /**
   * Escribe el artículo en el campo de búsqueda y presiona Enter
   * @param {String} article que se buscará
   */
  async search(article) {
       addStep(`Search article: ${article}`);
      await super.emptyFieldAndSendText(await this.searchBar, article);
      await this.searchBar.keys('Enter');
  }

  /**
   * Obtener texto de la barra de búsqueda
   */
  async getSearchText() {
     addStep('Get text from the search bar');
      return await this.searchBar.getValue();
  }

      /**
    * Clickea sobre el carrito de compras
    * @param {String} cartBtn a la que ingresara
    */
      async clickOnCart(cartBtn) {
        addStep(`Clicks in ${cartBtn}`);
        const cartclick = $(`//a[text()="${cartBtn}"]`);
        await cartclick.click();
     }








}
export default new HomePage();
