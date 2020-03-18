const validate = values => {
  const isUrlValid = userInput => {
    var res = userInput.match(
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) return false;
    else return true;
  };
  const errors = {};
  const { title, artist, src, image } = values;
  if (!title) {
    errors.title = "(*)";
  } else if (!artist) {
    errors.artist = " (*) ";
  } else if (!image) {
    errors.image = " (*) ";
  } else if (!isUrlValid(image)) {
    errors.image = "  Phải bắt đầu từ http:// hoặc url://";
  } else if (!src) {
    errors.src = " (*)";
  } else if (!isUrlValid(src)) {
    errors.src = "  Phải bắt đầu từ http:// hoặc url://";
  }
  return errors;
};

export default validate;
