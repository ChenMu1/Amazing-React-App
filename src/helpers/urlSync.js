import qs from 'qs';

export function getInitData() {
  const initData = qs.parse(window.location.search.slice(1));
  if (initData.toggle)
    initData.toggle.free_shipping =
      initData.toggle.free_shipping === 'true' ? true : undefined;
  return initData;
}
export function setUrl(searchState) {
  const search = searchState
    ? `${window.location.pathname}?${qs.stringify(searchState)}`
    : '';
  window.history.pushState(searchState, null, search);
}
