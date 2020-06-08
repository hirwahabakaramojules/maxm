const querries = {
  createTodo: `INSERT INTO todo (title , description) VALUES ( $1 , $2) RETURNING *`,
  getTodos: ` SELECT * FROM todo`,
};

export default querries;
