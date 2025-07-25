"use client";

import { useState, useCallback } from "react";

const CopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset after 2 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }, []);

  return { isCopied, handleCopy };
};

export default CopyToClipboard;