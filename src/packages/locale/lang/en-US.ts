import { BaseLang } from './baseLang';
const lang: BaseLang = {
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  done: 'Done',
  noData: 'No Data',
  placeholder: 'Placeholder',
  select: 'Select',
  video: {
    errorTip: 'Error Tip',
    clickRetry: 'Click Retry'
  },
  fixednav: {
    activeText: 'Close Nav',
    unActiveText: 'Open Nav'
  },
  pagination: {
    prev: 'Previous',
    next: 'Next'
  },
  calendaritem: {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    today: 'Today'
  },
  shortpassword: {
    title: 'Please input a password',
    desc: 'Verify',
    tips: 'Forget password'
  },
  uploader: {
    ready: 'Ready',
    readyUpload: 'Ready to upload',
    waitingUpload: 'Waiting for upload',
    uploading: 'Uploading',
    success: 'Upload successful',
    error: 'Upload failed'
  },
  countdown: {
    day: ' Day ',
    hour: ' Hour ',
    minute: ' Minute ',
    second: ' Second '
  }
};
export default lang;
