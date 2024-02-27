export interface MuseumList {
  result: Result[];
  resultCode: number;
  resultMsg: string;
  totalCount: number;
}

interface Result {
  item: Item;
}

interface Item {
  siteUrl: string;
  sprvsnType: string;
  acptNopeExpln: string;
  chagfeeYn: string;
  ctpvNm: string;
  daddr: string;
  fcltNm: string;
  fcltSn: number;
  fcltTypeCd: string;
  fcltTypeFullNm: string;
  fcltTypeNm: string;
  files: string[];
  hldyTmExpln: string;
  hldyTmSe: string;
  indrSe: string;
  indrSeExpln: string;
  instNm: string;
  lat: number;
  lon: number;
  lotnoAddr: string;
  mngInstCd: string;
  pbadmsStdInstCd: string;
  picDeptNm: string;
  picEml: string;
  picNm: string;
  picTelno: string;
  roadNmAddr: string;
  rsvtMthdDocYn: string;
  rsvtMthdEmlYn: string;
  rsvtMthdEtcExpln: string;
  rsvtMthdEtcYn: string;
  rsvtMthdExpln: string;
  rsvtMthdSiteYn: string;
  rsvtMthdTelYn: string;
  rsvtPsbltyYn: string;
  satTmExpln: string;
  satTmSe: string;
  sggNm: string;
  sprvsnNm: string;
  sprvsnTypeExpln: string;
  tcbizDayInfo: string;
  utztnMthdExpln: string;
  utztnPayExpln: string;
  utztnTrgtExpln: string;
  weekdaysTmExpln: string;
  weekdaysTmSe: string;
}
