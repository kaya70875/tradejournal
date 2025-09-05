'use client';

import { supabase } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export type Profile = {
    id: string;
    full_name: string;
}

export const useProfile = (userId: string | undefined) => {
    const [profile, setProfile] = useState<null | Profile>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getProfile = async () => {
            setLoading(true);

            if(userId) {
                const { data: profileData, error } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', userId)
                    .single()
                
                if(error) {
                    setLoading(false)
                    return console.log('Error while getting profile informations.', error)
                }

                setLoading(false);
                setProfile(profileData);
            } else {
                setProfile(null);
                setLoading(false);
            }
        }

        getProfile();
    }, [userId])

    return {profile, setProfile, loading};
}