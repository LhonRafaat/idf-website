export interface IMember {
  id: string;
  name: string;
  avatar: string;
  role: Roles;
}

export enum Roles {
  General = "General",
  Colonel = "Colonel",
  Private = "Private",
}
