import React from 'react'
import { useState } from 'react';

const Todo2 = () => {
  const [inputValue, setInputValue] = useState('');
  const [addData, setAddData] = useState([]);
  const [description, setDescription] = useState('');
  const [addDescription,setAddDescription] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setAddData((addData) => {
        const updateData = [...addData, inputValue];
        
        setInputValue('');
        return updateData
      })
      setAddDescription((addDescription)=>{
        const update = [...addDescription,description];
        console.log(update);
        setDescription('');
        return update
      });
    }

  }
  const remove = (id) => {
    const removeTask = addData.filter(
      (elem, i) => {
        return id !== i
      }
    )
    setAddData(removeTask);
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <p className="'navbar-brand">
            my to-do app
          </p>
        </div>
      </nav>

      <div className='container'>
        <div className='row bg-dark my-5'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <form>
                  <div className="from-group">
                    <input type='text' className="form-control" value={inputValue} placeholder='Write here.....' onChange={(e) => { setInputValue(e.target.value) }}></input>
                    
                  </div>
                  <div className="form-group">
                    <textarea cols={30} rows={10} className="form-control" value={description} maxLength={500}  placeholder="Description" onChange={(e) => { setDescription(e.target.value) }}/>
                  </div>
                  <button className="btn btn-success btn-block" onClick={(e) => { addTask(e) }}>Add</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-3 text-left">
                <p className='font-weight-bold'>Title</p>
              </div>
              <div className='col-sm-6 text-left'>
                <p className='font-weight-bold'>Description</p>
              </div>
              <div className="col-sm-3 text-right">
                <p className='font-weight-bold'>Delete</p>
              </div>
            </div>
            <hr />
            {
              addData !== [] && addData.map((data, id) => {
                return <>
                  <div className='tasks' style={{ marginBottom: '15px' }} key={id}>
                    <div className='card mb-3'>
                      <div className='card-body'>
                        <div className='row'>
                          <div className='col-sm-3 text-left'>
                            <p>{data}</p>
                          </div>
                          <div className='col-sm-6 text-left'>
                            <p>Description</p>
                          </div>
                          <div className='col-sm-3 text-right'>
                            <button className="btn btn-danger" onClick={() => { remove(id) }}>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo2
