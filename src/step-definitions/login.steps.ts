
import { Given, When, Then } from '@cucumber/cucumber';
import { Actors } from '../support/Actors';
import { Ensure, includes } from '@serenity-js/assertions';
import { Page } from '@serenity-js/web';

import { OpenSauceDemo } from '../screenplay/tasks/OpenSauceDemo';
import { Login } from '../screenplay/tasks/Login';
import { LoginError } from '../screenplay/questions/LoginError';

import users from '../test-data/users.json';

Given('que estoy en la página de inicio de sesión', async () => {
    await Actors.cliente().attemptsTo(
        OpenSauceDemo.page(),
    );
});

When('inicio sesión con las credenciales del usuario estándar', async () => {
    await Actors.cliente().attemptsTo(
        Login.withCredentials(
            users.standard_user.username,
            users.standard_user.password,
        ),
    );
});

Then('debería acceder al inventario de productos', async () => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            Page.current().url().href,
            includes('/inventory.html'),
        ),
    );
});

When('inicio sesión con las credenciales del usuario bloqueado', async () => {
    await Actors.cliente().attemptsTo(
        Login.withCredentials(
            users.locked_out_user.username,
            users.locked_out_user.password,
        ),
    );
});

Then('debería visualizar el mensaje de usuario bloqueado', async () => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            LoginError.message(),
            includes('locked out'),
        ),
    );
});

When('inicio sesión con credenciales incorrectas', async () => {
    await Actors.cliente().attemptsTo(
        Login.withCredentials(
            users.invalid_user.username,
            users.invalid_user.password,
        ),
    );
});

Then('debería visualizar el mensaje de credenciales incorrectas', async () => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            LoginError.message(),
            includes('Username and password do not match'),
        ),
    );
});
