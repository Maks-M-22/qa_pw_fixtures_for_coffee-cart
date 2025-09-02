import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  const unitPrice = PRICE.CAPPUCCINO;
  const formattedUnitPrice = unitPriceFormatStr(unitPrice);
  const formattedPrice = priceFormatStr(unitPrice);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(formattedUnitPrice);
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(formattedPrice);
});
