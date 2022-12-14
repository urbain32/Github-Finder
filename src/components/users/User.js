import PropTypes from 'prop-types';
import React, { Fragment, useContext, useEffect } from 'react';
import { Spinner } from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';
const User = ({match}) => {
  const githubContext = useContext(GithubContext);
const { user, loading, repos, getUserRepos, getUser } = githubContext;

  useEffect(() => {
    getUser(match.params.login); // will link us to our path=/user/:login
    getUserRepos(match.params.login); // will link us to our path=/user/:login
    // eslint-disable-next-line
  },[]);
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      company,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;
    if (loading) {
      return <Spinner />;
    }
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to Search
        </Link>
        Hireable: {''}
        {hireable ? (
          <i className='fas fa-check text-success' /> // this means if hireable is true
        ) : (
          // this means else hireable is false
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className='my-3'>
            {bio && (
              <Fragment>
                <h3 style={{ color: 'green' }}>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              View Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center'>
          <div className='badge badge-primary'>Followers:{followers}</div>
          <div className='badge badge-success'>Following:{following}</div>
          <div className='badge badge-info'>Public Repos:{public_repos}</div>
          <div className='badge badge-dark'>Public Gists:{public_gists}</div>
        </div>
        <Repos repos={ repos}/>
      </Fragment>
    );
  
}
User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };
export default User;
