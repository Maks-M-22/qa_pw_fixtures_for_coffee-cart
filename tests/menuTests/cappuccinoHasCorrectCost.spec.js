import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cup has correct cost', async ({ menuPage }) => {
  const unitPrice = PRICE.CAPPUCCINO;
  const formattedPrice = priceFormatStr(unitPrice);

  await menuPage.open();

  await menuPage.assertCappuccinoCupCostHasValue(formattedPrice);
});
