import { Signal } from '@preact/signals'
import { useEffect, useState } from 'preact/hooks'
import { request, gql } from 'graphql-request'

const bankAccountsQuery = gql`
  query BankAccounts {
    bankaccountComponents {
      edges {
        node {
          entity {
            id
            keys
          }
          balance
        }
      }
    }
  }
`

export function useBankAccount(playerBankAccount: Signal<{
  entity_id: string | null,
  player: string | null,
  balance: number,
}>) {
  const [bankAccount, setBankAccount] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchBankAccount() {
      setLoading(true)
      const response = await request('http://localhost:8080/', bankAccountsQuery)
      setLoading(false)
      if (response.hasOwnProperty('bankaccountComponents')) {
        if (response.bankaccountComponents.edges.length > 0) {
          const data = response.bankaccountComponents.edges[0];

          setBankAccount({
            entity_id: data.node.entity.id,
            balance: data.node.balance,
            player: data.node.entity.keys[0],
          })
        }
      } else {
        console.log('Error: no GraphQL response. Restart Torii')
        setBankAccount({})
      }
    }

    fetchBankAccount()
  }, [playerBankAccount])

  return [bankAccount, loading]
}
