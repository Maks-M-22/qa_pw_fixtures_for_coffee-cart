import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  const unitPrice = PRICE.ESPRESSO;
  const formattedUnitPrice = unitPriceFormatStr(unitPrice);
  const formattedPrice = priceFormatStr(unitPrice);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoNameIsContainsCorrectText();
  await cartPage.assertEspressoUnitContainsCorrectText(formattedUnitPrice);
  await cartPage.assertEspressoTotalCostContainsCorrectText(formattedPrice);
});
