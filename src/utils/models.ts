export interface Category {
  readonly id: string;
  readonly name: string;
  readonly is_active: boolean;
}

export interface Video {
  readonly id: string;
  readonly title: string;
  readonly categories: Category[];
}
