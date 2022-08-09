import { DateTime } from '../luxon/luxon.js';

export default function getTime() {
  const localtime = DateTime.local();
  return localtime.toLocaleString(DateTime.DATETIME_MED);
}
