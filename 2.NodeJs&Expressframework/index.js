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
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    res.status(400).send(validation.error.details[0].message);
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

// proper way to setup port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}...`));
