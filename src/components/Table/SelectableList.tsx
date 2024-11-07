import classNames from "classnames";
import React from "react";

interface SelectableItem {
  name: string;
  icon: string;
}

interface SelectableListProps {
  selectedItem: string;
  availableItems: SelectableItem[];
  onItemSelect: (itemName: string) => void;
}

export const SelectableList: React.FC<SelectableListProps> = ({
  selectedItem,
  availableItems,
  onItemSelect,
}) => (
  <div className="mb-4">
    {availableItems.map((item, index) => (
      <div
        key={index}
        className={classNames(
          "mb-2 flex cursor-pointer items-center rounded-lg p-2 transition-all duration-300 ease-in-out hover:bg-gray-300 hover:shadow-lg",
          {
            "bg-blue-100": selectedItem === item.name,
            "bg-gray-200": selectedItem !== item.name,
          },
        )}
        onClick={() => onItemSelect(item.name)}
      >
        <div
          className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 text-white"
          style={{ fontSize: "1.5rem" }}
        >
          {item.icon}
        </div>
        <span>{item.name}</span>
      </div>
    ))}
  </div>
);
