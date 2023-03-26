import { Radio, Label } from "./styled";

const ImageRadioButton = ({id, name, value, onChange, src, alt}) => (
    <>
      <Radio
        id={id}
        name={name}
        value={value}
        onChange={onChange} />
      <Label htmlFor={id}>
        <img src={src} alt={alt} />
      </Label>
    </>
);

export default ImageRadioButton;