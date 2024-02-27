export interface MuseumDetail {
  result: Result;
  resultCode: number;
  resultMsg: string;
}

interface Result {
  acptNopeExpln: string;
  chagfeeYn: string;
  ctpvNm: string;
  daddr: string;
  fcltNm: string;
  fcltSn: number;
  fcltTypeCd: string;
  fcltTypeFullNm: string;
  fcltTypeNm: string;
  files: FileElement[];
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
  siteUrl: string;
  sprvsnNm: string;
  sprvsnType: string;
  sprvsnTypeExpln: string;
  tcbizDayInfo: string;
  utztnMthdExpln: string;
  utztnPayExpln: string;
  utztnTrgtExpln: string;
  weekdaysTmExpln: string;
  weekdaysTmSe: string;
}

interface FileElement {
  file: FileFile;
}

interface FileFile {
  fcltFileNm: string;
  fcltFileSn: number;
  fileExtn: string;
  fileSe: string;
  url: string;
}
