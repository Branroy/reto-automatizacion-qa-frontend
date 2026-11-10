
import { By, PageElement, Text } from '@serenity-js/web';

export class CheckoutError {

    static message() {
        return Text.of(
            PageElement.located(
                By.css('[data-test="error"]')
            ).describedAs('mensaje de validación del checkout')
        );
    }
}
