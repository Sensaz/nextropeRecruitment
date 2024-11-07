import { Button } from "./Button";
import React, { useState, useCallback } from "react";

interface SelectWithAddFormProps<T> {
  items: T[];
  onSelect: (item: T) => void;
  onAdd: (newItem: string) => void;
  renderItem: (item: T) => React.ReactNode;
  placeholder: string;
  addButtonTitle: string;
  actionButtonTitle: string;
}

export const SelectWithAddForm = <T,>({
  items,
  onSelect,
  onAdd,
  renderItem,
  placeholder,
  addButtonTitle,
  actionButtonTitle,
}: SelectWithAddFormProps<T>) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  const addItem = useCallback(() => {
    if (newItemName.trim()) {
      onAdd(newItemName);
      setIsAdding(false);
      setNewItemName("");
    } else {
      alert("Invalid name.");
    }
  }, [newItemName, onAdd]);

  return (
    <div className="mb-4">
      {!isAdding ? (
        <div>
          <select
            onChange={(e) => onSelect(e.target.value as unknown as T)}
            className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">{placeholder}</option>
            {items.map((item, idx) => (
              <option key={idx} value={item as unknown as string}>
                {renderItem(item)}
              </option>
            ))}
          </select>
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelect(item)}
              className="mb-2 cursor-pointer rounded-lg p-2 hover:bg-gray-200"
            >
              {renderItem(item)}
            </div>
          ))}
          <Button onClick={() => setIsAdding(true)} title={addButtonTitle} />
        </div>
      ) : (
        <div>
          <input
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="mb-4 w-full rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
          />
          <Button onClick={addItem} title={actionButtonTitle} />
          <Button onClick={() => setIsAdding(false)} title="Cancel" />
        </div>
      )}
    </div>
  );
};
