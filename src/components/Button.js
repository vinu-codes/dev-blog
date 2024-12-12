"use client";

import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="bg-blue-500 px-6 py-4 rounded-md mt-8 text-white">
      Upvote
    </button>
  );
};

export default Button;
