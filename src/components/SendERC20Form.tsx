import { Button } from "./Button";
import React, { useState, useCallback } from "react";

interface SendERC20FormProps {
  onSend: (recipient: string, amount: string, tokenAddress: string) => void;
}

export const SendERC20Form: React.FC<SendERC20FormProps> = ({
  onSend = () => {},
}) => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");

  const handleSubmit = useCallback(() => {
    if (recipient && amount && tokenAddress && !isNaN(Number(amount))) {
      onSend(recipient, amount, tokenAddress);
    } else {
      alert("Please fill in all fields correctly.");
    }
  }, [recipient, amount, tokenAddress, onSend]);

  return (
    <div>
      <h3 className="mb-4 text-xl">Send ERC-20 Token</h3>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <input
        type="text"
        placeholder="Token Address"
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        className="mb-2 w-full rounded border p-2"
      />
      <Button onClick={handleSubmit} title="Send ERC-20 Token" />
    </div>
  );
};
