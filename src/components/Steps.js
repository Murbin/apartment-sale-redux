import Generic from '../pages/generic';
import * as ROUTES from '../utils/constants';
import {
  updateVal,
  selectName,
  selectEmail,
  selectAddress
} from '../features/profileSale/profileSaleSlice';
import { validateEmpty, validateEmail } from '../utils/helper';

export const Steps = {
  content: {
    body: [
      {
        _uid: '0',
        component: Generic,
        path: ROUTES.NAME_FORM,
        name: 'username',
        getData: selectName,
        saveData: updateVal,
        previous: ROUTES.HOME,
        next: ROUTES.EMAIL_FORM,
        placeholder: 'Adams Smith',
        type: 'text',
        validate: validateEmpty,
        description: 'REQUESTS THE NAME OF THE USER OWNER OF THE APARTMENT'
      },
      {
        _uid: '1',
        component: Generic,
        path: ROUTES.EMAIL_FORM,
        name: 'email',
        getData: selectEmail,
        saveData: updateVal,
        previous: ROUTES.NAME_FORM,
        next: ROUTES.ADDRESS_FORM,
        placeholder: 'adam@gmail.com',
        type: 'email',
        validate: validateEmail,
        description: 'REQUESTS THE EMAIL OF THE USER OWNER OF THE APARTMENT'
      },
      {
        _uid: '2',
        component: Generic,
        path: ROUTES.ADDRESS_FORM,
        name: 'address',
        getData: selectAddress,
        saveData: updateVal,
        previous: ROUTES.EMAIL_FORM,
        next: ROUTES.FLOOR_FORM,
        placeholder: 'Hillside, Daly City, California 94014, EE. UU.',
        type: 'text',
        validate: validateEmpty,
        description: 'REQUESTS THE ADDRESS OF THE USER OWNER OF THE APARTMENT'
      }
    ]
  }
};
