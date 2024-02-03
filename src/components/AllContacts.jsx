import { useEffect, useState } from 'react'

const AllContacts = () => {
  const [countries, setCountries] = useState([])
  const [even, setEven] = useState(false)
  console.log(even)
  useEffect(() => {
    fetch('https://contact.mediusware.com/api/contacts/')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.results)
      })
  }, [])
  console.log(countries)
  return (
    <div>
      <div class='form-check'>
        <input
          class='form-check-input'
          type='checkbox'
          value=''
          id='flexCheckDefault'
          onChange={() => setEven(!even)}
        />
        <label class='form-check-label' for='flexCheckDefault'>
          Evens
        </label>
      </div>
      <table class='table'>
        <thead>
          <th scope='col'>id</th>
          <th scope='col'>country</th>
          <th scope='col'>number</th>
        </thead>
        <tbody>
          {even ? (
            <>
              {countries
                .filter((c) => c.id % 2 === 0)
                .map((c, i) => (
                  <tr key={i}>
                    <td scope='row'>{c?.id}</td>
                    <td>{c?.country?.name}</td>
                    <td>{c?.phone}</td>
                  </tr>
                ))}
            </>
          ) : (
            <>
              {countries.map((c, i) => (
                <tr key={i}>
                  <td scope='row'>{c?.id}</td>
                  <td>{c?.country?.name}</td>
                  <td>{c?.phone}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllContacts
