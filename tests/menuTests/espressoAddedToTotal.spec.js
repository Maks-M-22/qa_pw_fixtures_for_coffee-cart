import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Espresso cost is added to Total on menu page', async ({
  menuPage,
}) => {
  const unitPrice = PRICE.ESPRESSO;
  const formattedTotalPrice = totalPriceFormatStr(unitPrice);

  await menuPage.open();
  await menuPage.clickEspressoCup();

  await menuPage.assertTotalCheckoutContainsValue(formattedTotalPrice);
});
