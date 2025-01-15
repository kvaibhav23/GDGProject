// const db = require('./db');

// const getAllCourses = async () => {
//   const result = await db.query("SELECT * FROM myschema.courses");
//   return result.rows;
// };

// const addCourse = async (course) => {
//   const { name, code, description, credit, image } = course;
//   const result = await db.query(
//     'INSERT INTO myschema.courses (name, code, description, credit, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
//     [name, code, description, credit, image]
//   );
//   return result.rows[0];
// };

// const deleteCourse = async (id) => {
//   const result = await db.query('DELETE FROM myschema.courses WHERE id = $1 RETURNING *', [id]);
//   return result.rows[0];
// };

// module.exports = { getAllCourses, addCourse, deleteCourse };
