import axios, { AxiosError } from "axios"
import { useState, useEffect } from "react"
import { ITickers } from "../models/Tickers/ITickers"

export function useTickers() {
    
  const [tickers, setTickers] = useState<ITickers[]>([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetcTickers() {
    try {
      setLoading(true)
      setError('')
      const response = await axios.get<ITickers[]>("https://api.allinoneapi.app/api/Stock/GetPriceDetailed?limit=15")
      setTickers(response.data)
      setLoading(false)
    }
    catch(e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }
  }

useEffect(()=>{
fetcTickers()
},[])
return { tickers, error, loading }
}