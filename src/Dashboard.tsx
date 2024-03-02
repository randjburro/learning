import React from 'react';
import { Brand, EntityRole, SidebarOption } from './components/types';

type Props = {
  brands: Brand[];
  entityRole: EntityRole;
  onAddSidebar: () => void;
  onDelete: () => void;
};

const Sidebar: React.FC<Props> = ({
  brands,
  entityRole,
  onAddSidebar,
  onDelete,
}) => (
  <aside className="bg-gray-200 p-4">
    <ul className="list-inside list-decimal space-y-2">
      <li>
        <button
          className="text-left text-blue-500 hover:text-blue-700"
          onClick={onAddSidebar}
        >
          Add Sidebar
        </button>
      </li>
      <li>Home</li>
      {brands.map((brand) => (
        <li key={brand.id}>
          {brand.name}
          {entityRole === 'admin' && (
            <>
              <span className="float-right mr-2">
                {/* Add delete button here */}
              </span>
              <span className="float-right mr-2">
                {/* Add edit button here */}
              </span>
            </>
          )}
        </li>
      ))}
      <li>
        Employee
        <span className="float-right mr-2">Active</span>
      </li>
      <li>
        Admin Dashboard
        <span className="float-right mr-2">
          {/* Add content here based on entity */}
        </span>
      </li>
    </ul>
  </aside>
);



export default Sidebar;