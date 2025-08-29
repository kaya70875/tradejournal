import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getClaims();
    if (error || !data?.claims) {
        redirect("/login");
    }
    return (
        <div>

        </div>
    )
}
