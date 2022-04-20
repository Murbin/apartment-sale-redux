import Generic from '../pages/generic';
import GenericSelect from '../pages/genericSelect';
import GenericCheckbox from '../pages/genericCheckbox';
import Price from '../pages/price';
import Home from '../pages/home';
import Image from '../pages/image';
import FinalReview from '../pages/finalReview';
import * as ROUTES from '../utils/constants';
import { floors, options } from '../utils/helper';
import {
  updateVal,
  updateValSelect,
  updateImage,
  selectName,
  selectEmail,
  selectAddress,
  selectFloor,
  selectZone,
  selectParking,
  selectPrice,
  selectImage,
  selectHasElevator
} from '../features/profileSale/profileSaleSlice';
import { validateEmpty, validateEmail } from '../utils/helper';

export const Steps = {
  content: {
    body: [
      {
        _uid: '0',
        component: Home,
        path: ROUTES.HOME,
        name: 'home',
        getData: undefined,
        saveData: undefined,
        previous: ROUTES.HAS_ELEVATOR_FORM,
        next: ROUTES.NAME_FORM,
        placeholder: 'Sell',
        type: undefined,
        validate: undefined,
        description: 'BUTTON TO START SELL'
      },
      {
        _uid: '1',
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
        _uid: '2',
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
        _uid: '3',
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
      },
      {
        _uid: '4',
        component: GenericSelect,
        path: ROUTES.FLOOR_FORM,
        name: 'floor',
        getData: selectFloor,
        saveData: updateVal,
        previous: ROUTES.ADDRESS_FORM,
        next: ROUTES.ZONE_FORM,
        placeholder: undefined,
        type: 'select',
        validate: validateEmpty,
        options: floors,
        choice: null,
        description: 'REQUESTS THE FLLOR OF THE APARTMENT',
        subItem: false,
        items: [{ id: 1, section: 'floor', label: 'Floor', childName: '' }]
      },
      {
        _uid: '5',
        component: GenericCheckbox,
        path: ROUTES.ZONE_FORM,
        name: 'zone',
        getData: selectZone,
        saveData: updateVal,
        previous: ROUTES.FLOOR_FORM,
        next: ROUTES.PARKING_FORM,
        placeholder: undefined,
        type: 'checkbox',
        validate: undefined,
        options: [
          { id: 0, section: 'bbq' },
          { id: 1, section: 'comunal' },
          { id: 1, section: 'entertainment' }
        ],
        choice: null,
        description: 'REQUESTS THE FLLOR OF THE APARTMENT'
      },
      {
        _uid: '6',
        component: GenericSelect,
        path: ROUTES.PARKING_FORM,
        name: 'parking',
        getData: selectParking,
        saveData: updateValSelect,
        child: true,
        previous: ROUTES.ZONE_FORM,
        next: ROUTES.PRICE_FORM,
        placeholder: undefined,
        type: 'select',
        validate: validateEmpty,
        options: options,
        choice: null,
        description: 'REQUESTS THE SECTIONS OF THE APARTMENT',
        subItem: true,
        items: [
          { id: 0, section: 'has', label: 'Has Parking ?', childName: 'has' },
          {
            id: 1,
            section: 'covered',
            label: 'It is Covered ?',
            childName: 'covered'
          }
        ]
      },
      {
        _uid: '7',
        component: Price,
        path: ROUTES.PRICE_FORM,
        name: 'price',
        getData: selectPrice,
        saveData: updateVal,
        child: undefined,
        previous: ROUTES.PARKING_FORM,
        next: ROUTES.IMAGE_FORM,
        placeholder: '$100,000,000.00',
        type: 'currency',
        validate: validateEmpty,
        options: undefined,
        choice: undefined,
        description: 'REQUESTS THE PRICE OF THE APARTMENT',
        subItem: undefined,
        items: undefined
      },
      {
        _uid: '8',
        component: Image,
        path: ROUTES.IMAGE_FORM,
        name: 'image',
        getData: selectImage,
        saveData: updateImage,
        child: undefined,
        previous: ROUTES.PRICE_FORM,
        next: ROUTES.HAS_ELEVATOR_FORM,
        placeholder: 'Click to load an image',
        type: 'file',
        validate: undefined,
        options: undefined,
        choice: undefined,
        description: 'REQUESTS THE IMAGE OF THE APARTMENT',
        subItem: undefined,
        items: undefined
      },
      {
        _uid: '9',
        component: GenericSelect,
        path: ROUTES.HAS_ELEVATOR_FORM,
        name: 'hasElevator',
        getData: selectHasElevator,
        saveData: updateVal,
        previous: ROUTES.IMAGE_FORM,
        next: ROUTES.RESUME,
        placeholder: 'Has an elevator?',
        type: 'select',
        validate: validateEmpty,
        options: options,
        choice: null,
        description: 'REQUESTS IF IT HAS ELEVATOR',
        subItem: false,
        items: [
          {
            id: 1,
            section: 'hasElevator',
            label: 'Does the apartment have an elevator?',
            childName: ''
          }
        ]
      },
      {
        _uid: '10',
        component: FinalReview,
        path: ROUTES.RESUME,
        name: 'Final Resume',
        getData: selectImage,
        saveData: undefined,
        previous: ROUTES.HAS_ELEVATOR_FORM,
        next: ROUTES.HOME,
        placeholder: undefined,
        type: undefined,
        validate: undefined,
        options: undefined,
        choice: undefined,
        description: 'RESUME',
        subItem: false,
        items: undefined
      }
    ]
  }
};
