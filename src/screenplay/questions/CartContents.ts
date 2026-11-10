
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export class CartContents {

    static productNames() {
        return Text.ofAll(
            PageElements.located(
                By.css('.cart_item .inventory_item_name')
            ).describedAs('nombres de los productos del carrito')
        );
    }

    static badgeCount() {
        return Text.of(
            PageElement.located(
                By.css('[data-test="shopping-cart-badge"]')
            ).describedAs('contador del carrito de compras')
        );
    }
}
