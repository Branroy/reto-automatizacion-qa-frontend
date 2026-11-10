
import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export class AddProduct {

    static named(productName: string) {

        const productId = productName
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-');

        const addButton = PageElement.located(
            By.css(`[data-test="add-to-cart-${productId}"]`)
        ).describedAs(`botón para agregar ${productName} al carrito`);

        return Task.where(
            `#actor agrega "${productName}" al carrito`,

            Click.on(addButton),
        );
    }
}
