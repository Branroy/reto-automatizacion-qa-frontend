
import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export class StartCheckout {

    static process() {

        const checkoutButton = PageElement.located(
            By.css('#checkout')
        ).describedAs('botón para iniciar el proceso de compra');

        return Task.where(
            '#actor inicia el proceso de compra',

            Click.on(checkoutButton),
        );
    }
}
