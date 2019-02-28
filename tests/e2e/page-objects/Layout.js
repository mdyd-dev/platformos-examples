import { Selector, t } from 'testcafe';
import { checkLiquidErrors, getResult } from '../helpers';

export default class LayoutPage {
  constructor() {
    this.URL = {
      staging: `${process.env.MP_URL}`
    };
    this.formErrors = {
      errorInvalidPassText: 'Invalid email or password',
      errorText: "can't be blank",
      errorIsNotValidEmailText: 'is not a valid email address',
      errorIsTooShort: 'is too short (minimum is 6 characters)'
    };
    this.Body = Selector('body');
    this.Content = this.Body.find('main');
    this.getResult = getResult;
  }

  async checkLiquidErrors() {
    return await checkLiquidErrors(t);
  }
}
