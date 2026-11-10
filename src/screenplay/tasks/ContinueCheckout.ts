
import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export class ContinueCheckout {

    static toOverview() {

        const continueButton = PageElement.located(
            By.css('[data-test="continue"]')
        ).describedAs('botón para continuar al resumen de compra');

        return Task.where(
            '#actor continúa al resumen de compra',

            Click.on(continueButton),
        );
    }
}
