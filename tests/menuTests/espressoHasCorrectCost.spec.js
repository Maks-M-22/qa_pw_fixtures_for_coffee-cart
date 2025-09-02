import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cup has correct cost', async ({ menuPage }) => {
  const unitPrice = PRICE.ESPRESSO;
  const formattedPrice = priceFormatStr(unitPrice);

  await menuPage.open();

  await menuPage.assertEspressoCupCostHasValue(formattedPrice);
});
