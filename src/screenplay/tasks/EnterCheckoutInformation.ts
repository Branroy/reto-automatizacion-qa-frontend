
import { Task } from '@serenity-js/core';
import { By, Enter, PageElement } from '@serenity-js/web';

export class EnterCheckoutInformation {

    static withDetails(
        firstName: string,
        lastName: string,
        postalCode: string,
    ) {

        const firstNameField = PageElement.located(
            By.css('[data-test="firstName"]')
        ).describedAs('campo de nombre');

        const lastNameField = PageElement.located(
            By.css('[data-test="lastName"]')
        ).describedAs('campo de apellido');

        const postalCodeField = PageElement.located(
            By.css('[data-test="postalCode"]')
        ).describedAs('campo de código postal');

        return Task.where(
            '#actor ingresa los datos de checkout',

            Enter.theValue(firstName).into(firstNameField),

            Enter.theValue(lastName).into(lastNameField),

            Enter.theValue(postalCode).into(postalCodeField),
        );
    }
}
