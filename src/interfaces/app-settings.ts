export enum TagVisibility {
  DoneOnly,
  All
}

export interface AppSettings {
  visibility: TagVisibility;
  itemSingular?: string;
  itemPlural?: string;
  fontSize?: number;
}
