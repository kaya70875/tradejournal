'use client';

import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

type Profile = {
    id: string;
    full_name: string;
}

export const useProfile = (userId: string) => {
    const [profile, setProfile] = useState<null | Profile>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getProfile = async () => {
            setLoading(true);

            if(userId) {
                const { data: profile, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', userId)
                    .single()
                
                if(error) {
                    setLoading(false)
                    return console.log('Error while getting profile informations.', error)
                }

                setLoading(false);
                setProfile(profile);
            };
        }

        getProfile();
    }, [userId])

    return {profile, loading};
}