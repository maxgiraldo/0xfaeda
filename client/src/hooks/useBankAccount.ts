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
  entity_id: string,
  player: string,
  balance: number,
}>): [{
  entity_id: string,
  player: string,
  balance: number,
}, Boolean] {
  const [bankAccount, setBankAccount] = useState({
    entity_id: '',
    balance: 0,
    player: '',
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchBankAccount() {
      setLoading(true)
      const response: any = await request('http://localhost:8080/', bankAccountsQuery)
      setLoading(false)
      if (response.hasOwnProperty('bankaccountComponents')) {
        if (response.bankaccountComponents.edges.length > 0) {
          const data = response.bankaccountComponents.edges[0];

          setBankAccount({
            entity_id: data.node.entity.id as string,
            balance: data.node.balance as number,
            player: data.node.entity.keys[0] as string,
          })
        }
      } else {
        console.log('Error: no GraphQL response. Restart Torii')
        setBankAccount({
          entity_id: '',
          balance: 0,
          player: '',
        })
      }
    }

    fetchBankAccount()
  }, [playerBankAccount])

  return [bankAccount, loading]
}
