import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Assert discounted Mocha added to the Cart after promo accepting', async ({
  menuPage,
  cartPage,
}) => {
  const espressoUnitPrice = PRICE.ESPRESSO;
  const discountedMochaPrice = PRICE.MOCHA / 2;
  const cappuccinoUnitPrice = PRICE.CAPPUCCINO;
  const americanoUnitPrice = PRICE.AMERICANO;
  const formattedEspressoPrice = priceFormatStr(espressoUnitPrice);
  const formattedMochaPrice = priceFormatStr(discountedMochaPrice);
  const formattedCappuccinoPrice = priceFormatStr(cappuccinoUnitPrice);
  const formattedAmericanoPrice = priceFormatStr(americanoUnitPrice);

  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();
  await menuPage.clickAmericanoCup();

  await menuPage.assertPromoMessageIsVisible();

  await menuPage.clickYesPromoButton();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    formattedEspressoPrice,
  );
  await cartPage.assertDiscountedMochaTotalCostContainsCorrectText(
    formattedMochaPrice,
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    formattedCappuccinoPrice,
  );
  await cartPage.assertAmericanoTotalCostContainsCorrectText(
    formattedAmericanoPrice,
  );
});
