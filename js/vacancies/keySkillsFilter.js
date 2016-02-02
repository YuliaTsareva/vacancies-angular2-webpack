export default function() {
  return (keySkills) => {
    if (!keySkills || keySkills.length === 0) {
      return;
    }

    return keySkills.map(skill => skill.name).join(', ');
  };
};
