import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  const unitsNumber = 2;
  const espressoFormattedPrice = priceFormatStr(PRICE.ESPRESSO);
  const espressoFormattedPriceForTwo = priceFormatStr(
    PRICE.ESPRESSO * unitsNumber,
  );
  const cappuccinoFormattedPrice = priceFormatStr(PRICE.CAPPUCCINO);
  const cappuccinoFormattedPriceForTwo = priceFormatStr(
    PRICE.CAPPUCCINO * unitsNumber,
  );
  const totalCost =
    PRICE.CAPPUCCINO * unitsNumber + PRICE.ESPRESSO * unitsNumber;
  const totalCheckoutFormattedPrice = 'Total: ' + priceFormatStr(totalCost);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    espressoFormattedPrice,
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    espressoFormattedPriceForTwo,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    cappuccinoFormattedPrice,
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    cappuccinoFormattedPriceForTwo,
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(
    espressoFormattedPriceForTwo,
  );

  await cartPage.assertTotalCheckoutContainsValue(totalCheckoutFormattedPrice);
});
