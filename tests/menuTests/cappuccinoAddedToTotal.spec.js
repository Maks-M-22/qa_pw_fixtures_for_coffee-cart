import { test } from '../_fixtures/fixtures';
import { PRICE } from '../../src/constants';
import { totalPriceFormatStr } from '../../src/common/helpers/getPriceForQuantity';

test('Check Cappuccino cost is added to Total on menu page', async ({
  menuPage,
}) => {
  const unitPrice = PRICE.CAPPUCCINO;
  const formattedTotalPrice = totalPriceFormatStr(unitPrice);

  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.assertTotalCheckoutContainsValue(formattedTotalPrice);
});
