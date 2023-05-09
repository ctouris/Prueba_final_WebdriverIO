
describe('Carrito', () => {

    it('Debería colocar articulo en el carrito', async () => {

      browser.url('/');
      const barraDeBusqueda = await $('#search');
      await barraDeBusqueda.setValue('pant');
      await barraDeBusqueda.keys('Enter');
      await browser.pause(5000);

      
    });
  })
    
 
