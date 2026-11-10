
import { By, PageElement, Text } from '@serenity-js/web';

export class LoginError {

    static message() {
        return Text.of(
            PageElement.located(
                By.css('[data-test="error"]')
            ).describedAs('mensaje de error de inicio de sesión')
        );
    }
}
