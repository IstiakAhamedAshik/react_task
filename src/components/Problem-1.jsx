import React, { useState } from 'react'

const Problem1 = () => {
  const [show, setShow] = useState('all')
  const [getValue, setGetValue] = useState([])
  const handleClick = (val) => {
    setShow(val)
  }
  //Submit Status
  const handaleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const status = e.target.status.value
    const inputFieldValue = { name, status }
    const getNewValue = [...getValue, inputFieldValue]
    setGetValue(getNewValue)
  }
  console.log(getValue)
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
        <div className='col-6 '>
          <form
            onSubmit={handaleSubmit}
            className='row gy-2 gx-3 align-items-center mb-4'
          >
            <div className='col-auto'>
              <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
              />
            </div>
            <div className='col-auto'>
              <input
                type='text'
                className='form-control'
                placeholder='Status'
                name='status'
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='col-8'>
          <ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type='button'
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type='button'
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type='button'
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className='tab-content'></div>
          <table className='table table-striped '>
            <thead>
              <th>All</th>
              <th>Status</th>
            </thead>

            <tbody>
              {show === 'all' ? (
                <>
                  {getValue.map((value, i) => (
                    <tr key={i}>
                      <td scope='col'>{value.name}</td>
                      <td scope='col'>{value.status}</td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  {getValue.map(
                    (value, i) =>
                      show === value.status && (
                        <tr key={i}>
                          <td scope='col'>{value.name}</td>
                          <td scope='col'>{value.status}</td>
                        </tr>
                      )
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Problem1
