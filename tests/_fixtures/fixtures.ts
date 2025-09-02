import { test as base } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { MenuPage } from '../../src/pages/MenuPage';

export const test = base.extend<{
  menuPage;
  cartPage;
}>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);

    await use(menuPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
});
