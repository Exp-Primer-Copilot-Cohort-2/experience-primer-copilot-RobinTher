function skillsMember() {
  const member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node'],
  };
  const { name, skills } = member;
  console.log(`${name} has the following skills: ${skills.join(', ')}`);
}