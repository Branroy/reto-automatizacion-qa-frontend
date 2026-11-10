
import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export class OpenCart {

    static page() {

        const shoppingCart = PageElement.located(
            By.css('[data-test="shopping-cart-link"]')
        ).describedAs('icono del carrito de compras');

        return Task.where(
            '#actor accede al carrito de compras',

            Click.on(shoppingCart),
        );
    }
}
