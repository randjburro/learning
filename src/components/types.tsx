export type Brand = {
    id: string;
    name: SidebarOption;
  };
  
  export type EntityRole = 'admin' | 'employee';
  
  export type SidebarOption =
    | 'Home'
    | 'Brand 1'
    | 'Brand 2'
    | 'Brand 3'
    | 'Brand 4'
    | 'Brand 5'
    | 'Store 4'
    | 'Employee';