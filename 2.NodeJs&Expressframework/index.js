const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
// to parse body into json^

const courses = [
  { id: 1, name: 'course 1' },
  { id: 2, name: 'course 2' },
  { id: 3, name: 'course 3' }
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  // where c is a function given name and id is a symbol from courses
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID was not found');
  // restful to indicate error 404 for non existent item
  res.send(course);

});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body); // this is equal to validation.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
    // in order for this to work, require enable json parsing for body^
  };
  courses.push(course);
  res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
  // check if id exist
  // if invalid return error 404

  //validate
  //if invalid return 400 - bad request

  //update course
  // return updated course

  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send('The course with the given ID was not found');

  // const validation = validateCourse(req.body);
  const { error } = validateCourse(req.body); // this is equal to validation.error

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  // if (validation.error) {
  //   res.status(400).send(validation.error.details[0].message);
  //   return;
  // }

  course.name = req.body.name;
  res.send(course);


});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  return schema.validate(course);
};


// proper way to setup port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));



// const schema = Joi.object({ name: Joi.string() .min(6) .required(),
//   email: Joi.string() .min(6) .required() .email(),
//   password: Joi.string() .min(6) .required() });

//   const validation = schema.validate(req.body);
//    res.send(validation);
