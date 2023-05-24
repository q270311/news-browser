import { Radio, Label } from './styled';

const ImageRadioButton = ({ id, name, value, onChange, src, alt, defaultChecked }) => (
  <>
    <Radio
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      defaultChecked={defaultChecked}
    />
    <Label htmlFor={id}>
      <img
        src={src}
        alt={alt}
      />
    </Label>
  </>
);

export default ImageRadioButton;
