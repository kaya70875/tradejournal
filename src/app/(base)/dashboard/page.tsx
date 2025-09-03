import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";
import DashboardClient from "../components/DashboardClient";

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

  if (errorTradeCards) return console.error(errorTradeCards);

  return <DashboardClient tradeCards={tradeCards} />;
}
