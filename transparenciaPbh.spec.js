describe('Prefeitura de Belo Horizonte', function() {
  it('valida titulor', function() {
  	browser.waitForAngularEnabled(false)
    browser.get('https://prefeitura.pbh.gov.br/');

    expect(browser.getTitle()).toEqual('PBH | Prefeitura de Belo Horizonte');
  });

  it('Transparencia', function(){
  	element(by.css('#block-gavias-vinor-main-menu > div > div > ul > li:nth-child(7) > a')).click();

  	expect(browser.getCurrentUrl()).toBe('https://prefeitura.pbh.gov.br/transparencia');
  });

  it('Concuros PBH', function(){
  	element(by.css('#transparencia-superfish-menu-link-content0a1ad7ef-beff-43c2-97ab-e74be6e8f7f5 > a')).click();

  	expect(browser.getCurrentUrl()).toBe('https://prefeitura.pbh.gov.br/planejamento/gestao-de-pessoas/recrutamento-selecao');
  })

});