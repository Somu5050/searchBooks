export type ItemDocsProps = {
  key?: string;
  title?: string;
  author_name?: Array<string>;
  isbn?: Array<string>;
  cover?: string;
  subject?: Array<string>;
  contributor?: Array<string>;
  first_publish_year?: number;
  place?: Array<string>;
  publisher?: Array<string>;
};

export type ItemProps = {
  num_found: number;
  docs: Array<ItemDocsProps>;
};
