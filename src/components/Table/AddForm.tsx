import { Button } from "../Button";
import React, { useState, useCallback } from "react";

interface AddFormProps {
  type: "wallet" | "network";
  onAdd: (name: string) => void;
  onCancel: () => void;
  placeholder: string;
  buttonText: string;
}

export const AddForm: React.FC<AddFormProps> = ({
  type,
  onAdd,
  onCancel,
  placeholder,
  buttonText,
}) => {
  const [newItemName, setNewItemName] = useState<string>("");

  const handleSubmit = useCallback(() => {
    if (newItemName.trim()) {
      onAdd(newItemName);
      setNewItemName("");
    } else {
      alert(`Please enter a valid ${type} name.`);
    }
  }, [newItemName, onAdd, type]);

  return (
    <div className="mt-4">
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        placeholder={placeholder}
      />
      <div className="flex gap-5">
        <Button onClick={handleSubmit} title={buttonText} theme="success" />
        <Button onClick={onCancel} title="Cancel" theme="danger" />
      </div>
    </div>
  );
};
