"use client";

import { supabase } from "@/lib/supabase/client";
import axios from "axios";
import React, { useEffect } from "react";

export default function Page() {
  const requestOtp = async () => {
    try {
      const response = await axios.post("/api/verify", {
        to: "+351919231113",
        code: "1234",
      });
      return response.data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  };

  useEffect(() => {
    const fetch = async () => {
      console.log(await supabase.from("categories").select());
    };
    fetch();
  }, []);

  return (
    <div>
      <button onClick={requestOtp}>request</button>
    </div>
  );
}
