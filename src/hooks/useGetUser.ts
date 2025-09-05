// hooks/useGetUser.ts
'use client'

import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"
import { supabase } from "@/utils/supabase/client"

export const useGetUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.error('Error getting user:', error)
      } else {
        setUser(data.user)
      }

      setLoading(false)
    }

    getUser()
  }, [])

  return { user, loading }
}
