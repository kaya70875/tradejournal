import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import DashboardClient from "../components/DashboardClient";
import Button from "@/components/Button";

export default async function page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/login");
  }

  /* Fetch cards from supabase */

  const { data: tradeCards, error: errorTradeCards } = await supabase
    .from("trade")
    .select("*")
    .order("created_at", { ascending: false });

  if (errorTradeCards) return (
    <div className="flex flex-col items-center justify-center w-full">
      <h3>An error happened.</h3>
      <Button onClick={() => redirect('/')}>Try Again</Button>
    </div>
  )

  return <DashboardClient tradeCards={tradeCards} />;
}
