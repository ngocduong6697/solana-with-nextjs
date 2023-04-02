import { useRouter } from 'next/router'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TransactionListDetail from '@app/components/Transaction/TransactionListDetail'

const TransactionDetail = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [transactionData, setTransactionData] = useState<any>([])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const getTransaction = async () => {
      try {
        setLoading(true)
        setErrorMessage('')

        const response = await axios.post('/api/transaction', {
          transactionHash: router.query?.id,
        })

        if (response.status === 200) {
          setTransactionData(response.data.transaction)
        }
      } catch (error: any) {
        setErrorMessage(
          error?.response.data?.message || 'Unable to fetch transaction. Please try again later.'
        )
      } finally {
        setLoading(false)
      }
    }

    getTransaction()
  }, [router.query?.id])
  return (
    <>
      <Head>
        <title>Solana Blockchain Explorer: Transaction</title>
      </Head>
      <main className="w-full h-full p-6 flex flex-col items-center justify-between gap-6 mx-auto relative">
        <h1 className="text-2xl">Transaction</h1>
        {errorMessage && <p className="text-red-600 text-base text-center my-1">{errorMessage}</p>}

        <TransactionListDetail loading={loading} transactionData={transactionData} />

        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
            Loading
          </div>
        )}
      </main>
    </>
  )
}

export default TransactionDetail
