import { useEffect, useState } from 'react'

export default function People() {
  const [ people, setPeople ] = useState([])
  const [ isLoading, setLoading ] = useState(true)

  const getPeople = async () => {
    setLoading(true)

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json()
    setPeople(result)
    setLoading(false)
  }

  useEffect(() => {
    getPeople()
  }, [])

  return <div>
      <h2>People</h2>

      { isLoading ? <div>Loading ...</div>
                  : <ul>
                      { people.map(person =>
                        <li key={ person.id }>{ person.name }</li>
                      ) }
                    </ul>
      }

  </div>
}