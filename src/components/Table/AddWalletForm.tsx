import { Button } from "../Button";
import React from "react";

interface AddWalletFormProps {
  newWalletName: string;
  setNewWalletName: React.Dispatch<React.SetStateAction<string>>;
  handleNewWalletSubmit: () => void;
  handleCancel: () => void;
}

export const AddWalletForm: React.FC<AddWalletFormProps> = ({
  newWalletName,
  setNewWalletName,
  handleNewWalletSubmit,
  handleCancel,
}) => (
  <div className="mt-4">
    <input
      type="text"
      value={newWalletName}
      onChange={(e) => setNewWalletName(e.target.value)}
      className="mb-4 w-full rounded border p-2"
      placeholder="Enter wallet name"
    />
    <div className="flex gap-5">
      <Button
        onClick={handleNewWalletSubmit}
        title="Add Wallet"
        theme="success"
      />
      <Button onClick={handleCancel} title="Cancel" theme="danger" />
    </div>
  </div>
);
