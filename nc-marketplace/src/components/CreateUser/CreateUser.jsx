import * as api from '../api'

const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: e.target.username.value,
      avatar_url: e.target.avatar_url.value,
    };
    api
      .postUser(newUser)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>
      <label htmlFor="avatar_url">Avatar URL</label>
      <input type="text" id="avatar_url"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateUser;