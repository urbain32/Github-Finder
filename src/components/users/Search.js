import React, { useContext, useState } from 'react';
import AlertContext from '../../context/alert/alertContext';

import GithubContext from '../../context/github/githubContext';
const Search = ({setAlert}) => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };
  const onChange = (e) => setText(e.target.value); //[e.target.name is similar to write text]
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users..'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
export default Search;
