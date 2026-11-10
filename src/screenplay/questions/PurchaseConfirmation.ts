
import { By, PageElement, Text } from '@serenity-js/web';

export class PurchaseConfirmation {

    static message() {
        return Text.of(
            PageElement.located(
                By.css('[data-test="complete-header"]')
            ).describedAs('mensaje de confirmación de compra')
        );
    }
}
