export interface MetaProps {
  keepAlive?: boolean;
  requiresAuth?: boolean;
  title: string;
  sort?: number;
  key?: string;
}

export interface RouteObject {
  caseSensitive?: boolean;
  children?: RouteObject[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta?: MetaProps;
  isLink?: string;
}
