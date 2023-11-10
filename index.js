/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', {
  save: 'Lưu',
  selectSingle: 'Chọn ngày',
  selectMultiple: 'Chọn nhiều ngày',
  selectRange: 'Chọn giai đoạn',
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: 'Ngày không được phép',
  previous: 'Trước',
  next: 'Sau',
  typeInDate: 'Nhập ngày',
  pickDateFromCalendar: 'Chọn ngày từ lịch',
  close: 'Đóng',
})

AppRegistry.registerComponent(appName, () => App);
