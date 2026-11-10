
import { When, Then } from '@cucumber/cucumber';
import { Actors } from '../support/Actors';
import { Ensure, equals } from '@serenity-js/assertions';

import { StartCheckout } from '../screenplay/tasks/StartCheckout';
import { EnterCheckoutInformation } from '../screenplay/tasks/EnterCheckoutInformation';
import { ContinueCheckout } from '../screenplay/tasks/ContinueCheckout';
import { FinishPurchase } from '../screenplay/tasks/FinishPurchase';

import { PurchaseConfirmation } from '../screenplay/questions/PurchaseConfirmation';
import { CheckoutError } from '../screenplay/questions/CheckoutError';

import checkoutData from '../test-data/checkout.json';

type ValidationCase = keyof typeof checkoutData.requiredFieldValidations;

function getValidationData(caseName: string) {
    const validationCase = checkoutData.requiredFieldValidations[
        caseName as ValidationCase
        ];

    if (!validationCase) {
        throw new Error(
            `No existe el caso de validación "${caseName}" en checkout.json`
        );
    }

    return validationCase;
}

When('inicio el proceso de compra', async () => {
    await Actors.cliente().attemptsTo(
        StartCheckout.process(),
    );
});

When('ingreso los datos de checkout', async () => {
    const { firstName, lastName, postalCode } =
        checkoutData.validPurchase;

    await Actors.cliente().attemptsTo(
        EnterCheckoutInformation.withDetails(
            firstName,
            lastName,
            postalCode,
        ),
    );
});

When('continúo al resumen de compra', async () => {
    await Actors.cliente().attemptsTo(
        ContinueCheckout.toOverview(),
    );
});

When('finalizo la compra', async () => {
    await Actors.cliente().attemptsTo(
        FinishPurchase.order(),
    );
});

Then('debería visualizar la confirmación de compra', async () => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            PurchaseConfirmation.message(),
            equals('Thank you for your order!'),
        ),
    );
});

When(
    'ingreso los datos del caso de validación {string}',
    async (caseName: string) => {
        const { firstName, lastName, postalCode } =
            getValidationData(caseName);

        await Actors.cliente().attemptsTo(
            EnterCheckoutInformation.withDetails(
                firstName,
                lastName,
                postalCode,
            ),
        );
    },
);

When('continúo al siguiente paso', async () => {
    await Actors.cliente().attemptsTo(
        ContinueCheckout.toOverview(),
    );
});

Then(
    'debería visualizar el mensaje del caso de validación {string}',
    async (caseName: string) => {
        const { expectedMessage } = getValidationData(caseName);

        await Actors.cliente().attemptsTo(
            Ensure.that(
                CheckoutError.message(),
                equals(expectedMessage),
            ),
        );
    },
);
