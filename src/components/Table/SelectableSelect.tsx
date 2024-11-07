import React from "react";

interface SelectableItem {
  name: string;
  icon: string;
}

interface SelectableSelectProps {
  selectedItem: string;
  availableItems: SelectableItem[];
  onItemSelect: (itemName: string) => void;
  placeholder: string;
}

export const SelectableSelect: React.FC<SelectableSelectProps> = ({
  selectedItem,
  availableItems,
  onItemSelect,
  placeholder,
}) => (
  <div className="mb-4">
    <select
      value={selectedItem}
      onChange={(e) => onItemSelect(e.target.value)}
      className="w-full rounded border p-2"
    >
      <option value="">{placeholder}</option>
      {availableItems.map((item, index) => (
        <option key={index} value={item.name}>
          {item.icon} {item.name}
        </option>
      ))}
    </select>
  </div>
);
