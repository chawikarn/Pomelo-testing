/// <reference types="cypress" />


it ('Login and logout function',function(){
    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_login"]').click() 
    cy.get('.auth__email-form > :nth-child(1) > .pml-input-layout__input-wrapper > .pml-input__wrapper > .jsx-1695452889').type('Chawikarnz@hotmail.com')
    cy.get(':nth-child(2) > .pml-input-layout__input-wrapper > .pml-input__wrapper > .body1').type('zondok-nihdo1-xevqoN')
    
    cy.get('[data-cy="auth__login__email__button"]').click()
    cy.get('[data-cy="auth__user__menu"] > .jsx-3383453402').contains('Hi')
    cy.get('[data-id="tooltip"]').find('[data-cy="desktop_menu_item___logout"]').click({force: true})
    
})


it ('adds the products-case1',function(){
    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_user__search"]').click()
    cy.get('.pml-input__wrapper > .body2').type("Pink Skirt").type('{enter}')
    //cy.contains('pink skirt')
    cy.get('[data-cy="product_item__image_59413"] > .product-image__fig > .product-image__hover > .picture > .image',{timeout : 10000}).click()
    cy.get('.jsx-971255180 > :nth-child(4)').click()
    cy.get('.pml-btn-pri').click()
    cy.contains('Item added to Bag',{timeout : 10000})
    cy.get('.cart-notice__prod-price > .jsx-3394283378').should('contain', '1,290 ฿')
    cy.get('.body2 > .jsx-3394283378').should('contain', 'Kelly Skirt - Pink')
    cy.get('[data-cy="close_cart_notice"] > .jsx-1694967188').click()
   //Check Cart
     cy.get('[data-cy="nav_user__cart"]').click()
     cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('1')

})




it('Case02 check quantity',function(){
    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_user__cart"]').click()
    cy.get('.cart-item-info__product-name').should('contain', 'Kelly Skirt - Pink')
    cy.get('.cart-item-info__product-price > .price1').should('contain', '1,290 ฿')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('1')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
   .should("have.value", 1);
   cy.get('.price2').should('contain', '1,290 ฿')
   cy.get(':nth-child(3) > .price1').should('contain',  '1,290 ฿') 
   if ( cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('2')) {
   cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('2')
   cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
   .should("have.value", 2);
   cy.get('.price2').should('contain', '2,580 ฿' )
   cy.get(':nth-child(3) > .price1').should('contain', '2,580 ฿' ) //2*1,290
   }
   else if ( cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('3')) {
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('3')
    cy.get('.cart-item-info__quantity > .pml-input-layout__container > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select')
    .should("have.value", 3);
    cy.get('.price2').should('contain', '3,870 ฿' )
    cy.get(':nth-child(3) > .price1').should('contain', '3,870 ฿' ) //3*1,290
    
   }
})


it('Case03 Check size',function(){

    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_user__cart"]').click()
    cy.get('.cart-item-info__product-name').should('contain', 'Kelly Skirt - Pink')
    cy.get('.cart-item-info__product-price > .price1').should('contain', '1,290 ฿')

    //check XS 
    if (cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('XS')){

    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('XS')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').should("contain",'XS');
  
}
//check S
if (cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('S')){
        
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('S')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').should("contain",'S'); 
}


//check M
if (cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('M')){
        
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('M')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').should("contain",'M'); 
}

//check L
if (cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('L')){
        
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('L')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').should("contain",'L'); 
}

//check XL
if (cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').contains('XL')){
        
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').select('XL')
    cy.get('.cart-item-info__size > .pml-input-layout__input-wrapper > .body1 > .pml-dropdown__select').should("contain",'XL'); 
}

})




it ('Case04 apply promo code (eligible Code)',function(){  
    cy.visit('https://www.pomelofashion.com/th/en/')
    //cy.contains('pink skirt')
    cy.get('[data-cy="nav_user__cart"]').click()
    cy.get('.cart-discount__main > .pml-input-layout__container > .jsx-958784943 > .pml-input__wrapper > .jsx-1695452889').type("GET30TH").type('{enter}')
    cy.get('.cart-discount__main > .jsx-3342260016').click()
    cy.get('.pomelo-snack-bar').contains('Please log in.') // Check valid code

})


it ('Case05 apply promo code (Invalid Code)',function(){  
    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_user__cart"]').click()
    cy.get('.cart-discount__main > .pml-input-layout__container > .jsx-958784943 > .pml-input__wrapper > .jsx-1695452889').type("Invalid Code discount").type('{enter}')
    cy.get('.cart-discount__main > .jsx-3342260016').click()
    cy.get('.pomelo-snack-bar').contains('Invalid voucher') // Check invalid code

})

it ('Case06 adjust and delete product items or items',function(){  
    cy.visit('https://www.pomelofashion.com/th/en/')
    cy.get('[data-cy="nav_user__cart"]').click()
    cy.get('.jsx-1747397204 > .pomelo-icon > .jsx-1694967188').click()
    cy.get('.cart-product').should('not.exist');
})



















   
