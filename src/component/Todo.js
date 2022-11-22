import React from 'react'
import {useState} from 'react'

function Todo() {
    const [inputValue,setInputValue] = useState('');
    const [addInputValue, setaddInputValue] = useState([]);
    //console.log(setInputValue);
    const handle = () => {
        //const update = [...addInputValue,inputValue];
        //setInputValue('');
        setaddInputValue([...addInputValue,inputValue]);

        console.log(addInputValue);
        //console.log(update);
        //return setaddInputValue(update)
    }

  return (
    <div>
      <>
  <nav className="navbar navbar-light bg-light">
    <div className="container">
      <p className="'navbar-brand">
        my to-do app
      </p>
    </div>
  </nav>
  <div className="container">
    <div className="row my-5 bg-dark">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <form id="form-task">
              <div className="from-group">
                <input
                  type="text"
                  className="form-control"
                  maxLength={50}
                  autoComplete="off"
                  placeholder="title"
                  required=""
                  value={inputValue}
                  onChange = {(e)=>{setInputValue(e.target.value)}}
                />
              </div>
              <div className="form-group">
                <textarea
                  cols={30}
                  rows={10}
                  className="form-control"
                  maxLength={500}
                  autoComplete="off"
                  placeholder="Description"
                  required=""
                  defaultValue={""}
                />
              </div>
              <button className="btn btn-success btn-block" onClick={()=>{handle()}}>
                save
              </button>
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
        <hr/>
        <div className='tasks'>
            <div className='card mb-3'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm-3 text-left'>
                            <p>title</p>
                        </div>
                        <div className='col-sm-6 text-left'>
                            <p>Description</p>
                        </div>
                        <div className='col-sm-3 text-right'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Todo
