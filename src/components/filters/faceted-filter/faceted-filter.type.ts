export interface FacetedFilterOption<T, M = null> {
  label: string;
  value: T,
  meta?: M
}