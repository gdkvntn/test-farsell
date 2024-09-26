export type factType = {
  fact: string;
  length: number;
};

export interface factsType {
  current_page: number;
  data: factType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<object>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
