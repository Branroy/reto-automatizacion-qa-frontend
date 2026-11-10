
import { When, Then } from '@cucumber/cucumber';
import { Actors } from '../support/Actors';
import { Ensure, equals, contain } from '@serenity-js/assertions';

import { AddProduct } from '../screenplay/tasks/AddProduct';
import { OpenCart } from '../screenplay/tasks/OpenCart';
import { CartContents } from '../screenplay/questions/CartContents';

When('agrego {string} al carrito', async (productName: string) => {
    await Actors.cliente().attemptsTo(
        AddProduct.named(productName),
    );
});

Then('el carrito debería mostrar {int} producto', async (expectedCount: number) => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            CartContents.badgeCount(),
            equals(String(expectedCount)),
        ),
    );
});

When('accedo al carrito de compras', async () => {
    await Actors.cliente().attemptsTo(
        OpenCart.page(),
    );
});

Then('debería visualizar {string} en el carrito', async (productName: string) => {
    await Actors.cliente().attemptsTo(
        Ensure.that(
            CartContents.productNames(),
            contain(productName),
        ),
    );
});
