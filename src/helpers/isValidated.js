
const isFieldValidated = (string, field) => {
  // eslint-disable-next-line
  const emailRegexp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  const phoneRegexp = /^[+]{0,1}380([0-9]{9})$/;
  const nameRegexp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  if (field === "email") {
    return emailRegexp.test(string);
  }

  if (field === "phone") {
    return phoneRegexp.test(string) && string.slice(0, 4) === '+380';
  }
  if (field === "name") {
    return nameRegexp.test(string) && string.length > 1;
  }

}
// Minimum size of photo 70x70px.The photo format must be jpeg / jpg type.The photo size must not be greater than 5 Mb
// 1 Megabytes = 1048576 Bytes


export const isImageValidated = (file) => {

  // const size = file.size;
  // let imageWidth = 0;
  // let height = 0;

  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = function () {
    const image = new Image();
    image.src = fileReader.result;
    image.onload = function () {
      console.log(image.width, image.height);
    };
  };

}

export default isFieldValidated;