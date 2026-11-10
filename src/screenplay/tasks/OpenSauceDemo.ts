
import { Task } from '@serenity-js/core';
import { Navigate } from '@serenity-js/web';

export class OpenSauceDemo {

    static page() {
        return Task.where(
            '#actor abre la página de Sauce Demo',

            Navigate.to('https://www.saucedemo.com/'),
        );
    }
}
