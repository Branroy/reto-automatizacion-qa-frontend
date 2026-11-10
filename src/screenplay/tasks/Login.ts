
import { Masked, Task } from '@serenity-js/core';
import { By, Click, Enter, PageElement } from '@serenity-js/web';

export class Login {

    private static readonly usernameField =
        PageElement.located(By.css('[data-test="username"]'))
            .describedAs('campo de usuario');

    private static readonly passwordField =
        PageElement.located(By.css('[data-test="password"]'))
            .describedAs('campo de contraseña');

    private static readonly loginButton =
        PageElement.located(By.css('[data-test="login-button"]'))
            .describedAs('botón de inicio de sesión');

    static withCredentials(username: string, password: string) {
        return Task.where(
            '#actor inicia sesión en Sauce Demo',

            Enter.theValue(username)
                .into(Login.usernameField),

            Enter.theValue(Masked.valueOf(password))
                .into(Login.passwordField),

            Click.on(Login.loginButton),
        );
    }
}
