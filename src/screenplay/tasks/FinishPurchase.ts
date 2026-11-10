
import { Task } from '@serenity-js/core';
import { By, Click, PageElement } from '@serenity-js/web';

export class FinishPurchase {

    static order() {

        const finishButton = PageElement.located(
            By.css('[data-test="finish"]')
        ).describedAs('botón para finalizar la compra');

        return Task.where(
            '#actor finaliza la compra',

            Click.on(finishButton),
        );
    }
}
